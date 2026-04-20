"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type SupabaseUser = {
  id: string;
  email?: string;
};

export default function RegisterPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      // 🔐 REGISTRO
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.log("Signup error:", error.message);
        alert("Error al registrar: " + error.message);
        return;
      }

      const user = data?.user as SupabaseUser | null;

      if (!user) {
        alert("Usuario creado, pero no se pudo obtener usuario");
        return;
      }

      // 🔥 PERFIL AUTOMÁTICO (BACKUP POR SI FALLA EL TRIGGER)
      const { error: profileError } = await supabase
        .from("profiles")
        .upsert(
          {
            id: user.id,
            email: user.email ?? email,
            name: "",
            avatar_url: "",
            role: "free",
          },
          { onConflict: "id" }
        );

      if (profileError) {
        console.log("Perfil warning:", profileError.message);

        // ⚠️ No frenamos el flujo
        alert("Cuenta creada ✅ Revisá tu email para confirmar 📩");
        return;
      }

      // ✅ TODO OK
      alert("Cuenta creada 🚀 Revisá tu email para confirmar 📩");

      // 👉 OPCIONAL: limpiar form
      setEmail("");
      setPassword("");

      // 👉 OPCIONAL PRO (después lo activamos)
      // router.push("/login");

    } catch (err) {
      console.log("Unexpected error:", err);
      alert("Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[600px] h-[600px] bg-amber-400/20 blur-[120px] animate-pulse top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] animate-pulse bottom-[-200px] right-[-200px]" />
      </div>

      {/* CARD */}
      <div className="relative w-full max-w-md">

        <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-60 animate-pulse" />

        <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(251,191,36,0.15)]">

          <h1 className="text-2xl font-bold text-center text-white mb-2">
            🔥 ZUP FITNESS
          </h1>

          <p className="text-center text-white/60 text-sm mb-6">
            Creá tu cuenta y empezá tu transformación
          </p>

          <form onSubmit={signUp} className="space-y-4">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/10 outline-none focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/20 transition"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/10 outline-none focus:border-amber-300/60 focus:ring-2 focus:ring-amber-300/20 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className={`
                w-full py-3 rounded-xl font-bold
                bg-gradient-to-r from-amber-300 to-yellow-400 text-black
                shadow-[0_10px_30px_rgba(251,191,36,0.35)]
                transition-all duration-300
                ${loading 
                  ? "opacity-50 cursor-not-allowed" 
                  : "hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(251,191,36,0.5)] active:scale-95"
                }
              `}
            >
              {loading ? "Creando cuenta..." : "🚀 Crear cuenta"}
            </button>

          </form>

          <p className="text-center text-white/40 text-xs mt-6">
            Entrená fuerte. Evolucioná más fuerte.
          </p>

        </div>
      </div>
    </div>
  );
}