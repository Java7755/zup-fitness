// components/Header.tsx
'use client'

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="
      w-full fixed top-0 z-50
      border-b border-yellow-400/20
      bg-gray-900
      [background-image:
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(120deg,#2c2c2c,#1f1f1f,#3b3b3b),
        repeating-linear-gradient(120deg, rgba(139,69,19,0.15) 0px, rgba(139,69,19,0.15) 2px, transparent 2px, transparent 6px)
      ]
      [background-size: 20px 20px, 20px 20px, auto, auto]
    ">

      {/* Línea glow */}
      <div className="h-[2px] w-full bg-gradient-to-r from-yellow-400 via-blue-400 to-violet-500 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* 🔥 Logo + HOME */}
        <Link href="/" className="flex items-center gap-1 hover:scale-105 transition">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-full bg-yellow-400/10 blur-xl z-0" />
            <div
              className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] opacity-90 blur-[1px]"
              style={{
                background: "conic-gradient(#facc15, #facc15, #60a5fa, #a78bfa, #facc15)",
                WebkitMask: "radial-gradient(circle, transparent 65%, black 66%)",
                mask: "radial-gradient(circle, transparent 65%, black 66%)",
                boxShadow: "0 0 20px #facc15, 0 0 40px #a78bfa"
              }}
            />
            <div className="w-14 h-14 relative rounded-full overflow-hidden border border-violet-400/40 bg-black z-10">
              <Image
                src="/logo1.png"
                alt="Z-UP Fitness"
                fill
                sizes="56px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <div className="flex items-center -ml-0.5">
            <span className="mr-0.5 text-xl">⚡</span>
            <span className="text-2xl font-extrabold tracking-wide text-violet-400 drop-shadow-[0_0_12px_#8b5cf6]">
              HOME
            </span>
          </div>
        </Link>

        {/* 🔥 NAV */}
        <nav className="hidden md:flex gap-8 text-[13px] font-semibold uppercase tracking-[0.15em] items-center">
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
                  ? "px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-black font-bold shadow-[0_0_12px_#ff4d00]"
                  : "text-white/70 hover:text-yellow-400"
              }`}
            >
              <span className={`inline-block transition ${
                link.highlight ? "group-hover:scale-110" : "group-hover:scale-105"
              }`}>
                {link.highlight ? "🔥 RESULTADOS" : link.name}
              </span>

              {/* underline SOLO para los normales */}
              {!link.highlight && (
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* 🔥 DERECHA */}
        <div className="flex items-center justify-end gap-3">

          {/* Botón Reto 21 días */}
          <Link href="/reto-21-dias">
            <button className="
              bg-yellow-400 text-black 
              font-bold px-5 py-2 rounded-xl 
              shadow-[0_0_15px_#facc15]
              hover:scale-105 
              hover:shadow-[0_0_25px_#facc15]
              transition
              mr-10
            ">
              ⚡ Reto 21 días
            </button>
          </Link>

          {/* Usuario */}
          <Link href="/perfil">
            <div className="
              w-12 h-12 flex items-center justify-center
              rounded-full
              bg-gradient-to-tr from-yellow-500/80 via-orange-400/80 to-red-500/80
              border-2 border-white/20
              shadow-[0_0_8px_#facc15,0_0_12px_#a78bfa]
              cursor-pointer
              transition-all duration-300
              hover:scale-110
              hover:shadow-[0_0_12px_#facc15,0_0_20px_#a78bfa]
              group
            ">
              <User className="w-6 h-6 text-white/90 transition" />
            </div>
          </Link>

          {/* Carrito */}
          <Link href="/carrito">
            <div className="
              relative
              w-12 h-12 flex items-center justify-center
              rounded-full
              bg-gradient-to-tr from-blue-500/80 via-cyan-400/80 to-teal-500/80
              border-2 border-white/20
              shadow-[0_0_8px_#60a5fa,0_0_12px_#3b82f6]
              cursor-pointer
              transition-all duration-300
              hover:scale-110
              hover:shadow-[0_0_12px_#60a5fa,0_0_20px_#3b82f6]
              group
            ">
              <ShoppingCart className="w-6 h-6 text-white/90 transition" />
              <span className="
                absolute -top-1.5 -right-1.5
                text-[10px]
                bg-yellow-400 text-black
                px-1.5 py-[1px]
                rounded-full font-bold
                shadow-[0_0_10px_#facc15]
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