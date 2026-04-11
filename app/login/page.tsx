"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      alert("Error al iniciar sesión");
      return;
    }

    if (data?.user) {
      alert("Bienvenido a ZUP 🔥");
      router.push("/perfil");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] relative overflow-hidden">

      {/* 🔥 BACKGROUND ENERGY BLUE (LOGIN MODE) */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 blur-[120px] animate-pulse top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] animate-pulse bottom-[-200px] right-[-200px]" />
      </div>

      {/* 🔥 CARD WRAPPER */}
      <div className="relative w-full max-w-md">

        {/* 🔥 OUTER GLOW */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 rounded-2xl blur-xl opacity-60 animate-pulse" />

        {/* CARD */}
        <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

          {/* TITLE */}
          <h1 className="text-2xl font-bold text-center text-white mb-2">
            👤 Bienvenido a ZUP
          </h1>

          <p className="text-center text-white/60 text-sm mb-6">
            Ingresá para continuar tu progreso
          </p>

          {/* FORM */}
          <form onSubmit={signIn} className="space-y-4">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/5 text-white
                border border-white/10
                outline-none
                focus:border-cyan-300/60
                focus:ring-2 focus:ring-cyan-300/20
                transition
              "
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/5 text-white
                border border-white/10
                outline-none
                focus:border-cyan-300/60
                focus:ring-2 focus:ring-cyan-300/20
                transition
              "
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full py-3 rounded-xl font-bold
                bg-gradient-to-r from-cyan-400 to-blue-500
                text-black
                shadow-[0_10px_30px_rgba(34,211,238,0.35)]
                hover:scale-[1.03]
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.5)]
                active:scale-95
                transition-all duration-300
              "
            >
              🔐 Entrar
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-center text-white/40 text-xs mt-6">
            Seguís creciendo. Nunca pares.
          </p>

        </div>
      </div>
    </div>
  );
}