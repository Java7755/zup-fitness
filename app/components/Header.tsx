'use client'

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  // 🔐 detectar sesión
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUserClick = () => {
    if (user) {
      router.push("/perfil");
    } else {
      router.push("/login");
    }
  };

  return (
    <header className={`
      w-full fixed top-0 z-50
      border-b transition-all duration-500

      ${scrolled 
        ? "border-amber-300/20 bg-gray-900/80 backdrop-blur-xl"
        : "border-transparent bg-gray-900/95"
      }

      [background-image:
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(120deg,#2c2c2c,#1f1f1f,#3b3b3b)
      ]
      [background-size: 20px 20px, 20px 20px, auto]
    `}>

      {/* 🔥 LÍNEA PREMIUM */}
      <div className={`
        h-[2px] w-full transition-all duration-500
        ${scrolled ? "opacity-70" : "opacity-40"}
        bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400
      `} />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 🔥 LOGO */}
        <Link href="/" className="group flex items-center">
          <div className="relative w-16 h-16 flex items-center justify-center">

            <div className={`
              absolute w-12 h-12 rounded-full blur-xl transition-all duration-500
              ${isHome 
                ? "bg-amber-300/30 scale-125"
                : "bg-amber-300/10 group-hover:bg-amber-300/30 group-hover:scale-125"
              }
            `} />

            <div
              className="absolute inset-0 rounded-full animate-[spin_6s_linear_infinite] opacity-70"
              style={{
                background: "conic-gradient(#fcd34d, #fcd34d, #60a5fa, #a78bfa, #fcd34d)",
                WebkitMask: "radial-gradient(circle, transparent 65%, black 66%)",
                mask: "radial-gradient(circle, transparent 65%, black 66%)"
              }}
            />

            <div className="
              w-14 h-14 relative rounded-full overflow-hidden 
              border border-white/10 bg-black z-10
              transition-transform duration-300
              group-hover:scale-105
            ">
              <Image
                src="/logo1.png"
                alt="Z-UP Fitness"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-[13px] font-semibold uppercase tracking-[0.18em] items-center">
          {[
            { name: "Resultados", href: "/resultados", highlight: true },
            { name: "Método", href: "/metodo" },
            { name: "Programas", href: "/programas" },
            { name: "Noti-ZUP", href: "/noticias" }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative group transition-all duration-300 ${
                link.highlight
                  ? "px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 text-black font-bold shadow-[0_8px_20px_rgba(251,191,36,0.4)]"
                  : "text-white/70 hover:text-amber-300"
              }`}
            >
              <span className={`inline-block transition ${
                link.highlight ? "group-hover:scale-110" : "group-hover:scale-105"
              }`}>
                {link.highlight ? "🔥 RESULTADOS" : link.name}
              </span>

              {!link.highlight && (
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-300 transition-all duration-300 group-hover:w-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* DERECHA */}
        <div className="flex items-center justify-end gap-3">

          {/* RETO */}
          <Link href="/reto-21-dias">
            <button className="
              px-6 py-2.5
              bg-gradient-to-r from-amber-300 to-yellow-400
              text-black font-bold 
              rounded-xl 
              shadow-[0_10px_30px_rgba(251,191,36,0.35)]
              hover:scale-105 
              hover:shadow-[0_15px_40px_rgba(251,191,36,0.5)]
              active:scale-95
              transition-all duration-300
            ">
              ⚡ Reto 21 días
            </button>
          </Link>

          {/* REGISTER */}
          <Link href="/register">
            <button className="
              px-5 py-2.5
              bg-white/10
              text-white font-semibold
              border border-white/20
              rounded-xl
              backdrop-blur-md
              hover:bg-white/20
              hover:scale-105
              transition-all duration-300
            ">
              Registrate
            </button>
          </Link>

          {/* LOGIN / PERFIL (SIN any, TIPADO) */}
          <div
            onClick={handleUserClick}
            className="
              w-11 h-11 flex items-center justify-center
              rounded-full
              bg-gradient-to-tr from-amber-400/80 via-orange-400/80 to-red-500/80
              border border-white/10
              shadow-[0_0_10px_rgba(251,191,36,0.4)]
              cursor-pointer
              transition-all duration-300
              hover:scale-110
            "
          >
            <User className="w-5 h-5 text-white/90" />
          </div>

          {/* CARRITO */}
          <Link href="/carrito">
            <div className="
              relative
              w-11 h-11 flex items-center justify-center
              rounded-full
              bg-gradient-to-tr from-blue-500/80 via-cyan-400/80 to-teal-400/80
              border border-white/10
              shadow-[0_0_10px_rgba(96,165,250,0.4)]
              cursor-pointer
              transition-all duration-300
              hover:scale-110
            ">
              <ShoppingCart className="w-5 h-5 text-white/90" />

              <span className="
                absolute -top-1.5 -right-1.5
                text-[10px]
                bg-amber-300 text-black
                px-1.5 py-[1px]
                rounded-full font-bold
                shadow-[0_0_10px_rgba(251,191,36,0.6)]
              ">
                0
              </span>
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
}