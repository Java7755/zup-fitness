"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { getProfile } from "@/lib/user";
import type { User } from "@supabase/supabase-js";

type Profile = {
  id: string;
  email: string;
  name: string | null;
  avatar_url: string | null;
  role: string | null;
};

export default function PerfilPage() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();

      const currentUser = data.user;
      setUser(currentUser);

      if (!currentUser) {
        setLoading(false);
        return;
      }

      const profileData = await getProfile(currentUser.id);
      setProfile(profileData);

      setLoading(false);
    };

    loadUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Cargando...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No estás logueado
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center text-white">

      <div className="w-[420px] bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">

        <h1 className="text-2xl font-bold mb-4">
          👤 Perfil
        </h1>

        <div className="space-y-2 text-white/70">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Nombre:</strong> {profile?.name || "Sin nombre"}</p>
          <p><strong>Rol:</strong> {profile?.role || "free"}</p>
        </div>

      </div>
    </div>
  );
}