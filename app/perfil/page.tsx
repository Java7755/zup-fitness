"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { getProfile } from "@/lib/user";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";

type Profile = {
  id: string;
  email: string;
  name: string | null;
  avatar_url: string | null;
  role: string | null;
};

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          console.log("Error obteniendo usuario:", error.message);
          router.replace("/login");
          return;
        }

        const currentUser = data.user;

        // 🔐 PROTECCIÓN REAL
        if (!currentUser) {
          router.replace("/login");
          return;
        }

        setUser(currentUser);

        const profileData = await getProfile(currentUser.id);

        if (!profileData) {
          console.log("Perfil no encontrado");
        }

        setProfile(profileData);
      } catch (err) {
        console.log("Error inesperado:", err);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [router]);

  // 🚪 LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  // 🔄 Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Cargando perfil...
      </div>
    );
  }

  // ⚠️ fallback (no debería pasar por el redirect)
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center text-white">

      <div className="w-[420px] bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">👤 Profile</h1>

          <button
            onClick={handleLogout}
            className="text-sm px-3 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 transition"
          >
            Cerrar sesión
          </button>
        </div>

        {/* INFO */}
        <div className="space-y-2 text-white/70">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Nombre:</strong> {profile?.name || "Sin nombre"}</p>
          <p><strong>Rol:</strong> {profile?.role || "free"}</p>
        </div>

      </div>
    </div>
  );
}