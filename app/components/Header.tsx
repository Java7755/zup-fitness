// components/Header.tsx
'use client'

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="
      w-full fixed top-0 z-50
      backdrop-blur-md
      border-b border-yellow-400/20
      bg-black/70
      [background-image:
        linear-gradient(120deg,rgba(250,204,21,0.15),rgba(0,0,0,0.6),rgba(250,204,21,0.15)),
        repeating-linear-gradient(120deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_2px,transparent_2px,transparent_6px)
      ]
    ">

      {/* Línea glow animada */}
      <div className="h-[2px] w-full bg-gradient-to-r from-yellow-400 via-blue-400 to-violet-500 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* 🔥 Logo + Marca */}
        <Link 
          href="/" 
          className="flex items-center gap-0 hover:scale-105 transition"
        >
          <div className="relative w-16 h-16 flex items-center justify-center">
            
            {/* 🔥 Núcleo de energía */}
            <div className="
              absolute w-12 h-12 rounded-full
              bg-yellow-400/10
              blur-xl
              z-0
            " />

            {/* 🔥 Anillo MEJORADO */}
            <div
              className="
                absolute inset-0 rounded-full
                animate-[spin_4s_linear_infinite]
                opacity-90
                blur-[1px]
              "
              style={{
                background: "conic-gradient(#facc15, #facc15, #60a5fa, #a78bfa, #facc15)",
                WebkitMask: "radial-gradient(circle, transparent 65%, black 66%)",
                mask: "radial-gradient(circle, transparent 65%, black 66%)",
                boxShadow: "0 0 20px #facc15, 0 0 40px #a78bfa"
              }}
            />

            {/* Logo */}
            <div className="
              w-14 h-14 relative 
              rounded-full overflow-hidden 
              border border-violet-400/40
              bg-black z-10
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

          {/* ⚡ Marca ajustada PRO */}
          <div className="flex items-center -ml-0.5">
            
            {/* ⚡ más separado del logo */}
            <span className="mr-0.5 text-xl">
              ⚡
            </span>

            {/* Texto pegado al rayo */}
            <span className="
              text-2xl font-extrabold tracking-wide 
              text-violet-400 
              drop-shadow-[0_0_12px_#8b5cf6]
            ">
              HOME
            </span>

          </div>
        </Link>

        {/* 🔥 Menu mejorado */}
        <nav className="hidden md:flex gap-10 text-[13px] font-semibold uppercase tracking-[0.15em]">
          {["Noti-Fitness", "Método", "Programas", "Coaching", "Recursos"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/ /g, "-")}`}
              className="
                text-white/70
                hover:text-yellow-400
                transition-all duration-300
                relative
                group
              "
            >
              <span className="group-hover:scale-105 inline-block transition">
                {link}
              </span>

              <span className="
                absolute left-0 -bottom-1
                w-0 h-[2px]
                bg-yellow-400
                transition-all duration-300
                group-hover:w-full
              " />
            </Link>
          ))}
        </nav>

        {/* 🔥 Right section PRO */}
        <div className="flex items-center gap-3">
          
          <Link href="/programas">
            <button className="
              hidden md:block 
              border border-yellow-400 
              text-yellow-400 
              px-4 py-2 rounded-xl 
              hover:bg-yellow-400 
              hover:text-black 
              transition
            ">
              Ver programas
            </button>
          </Link>

          <Link href="/reto-21-dias">
            <button className="
              bg-yellow-400 text-black 
              font-bold px-5 py-2 rounded-xl 
              shadow-[0_0_15px_#facc15]
              hover:scale-105 
              hover:shadow-[0_0_25px_#facc15]
              transition
            ">
              ⚡ Reto 21 días
            </button>
          </Link>

          {/* 🔥 Usuario */}
          <Link href="/perfil">
            <div className="
              w-10 h-10 flex items-center justify-center
              rounded-full
              bg-white/5
              border border-white/10
              backdrop-blur-md
              cursor-pointer
              transition-all duration-300
              hover:bg-yellow-400
              hover:border-yellow-400
              hover:shadow-[0_0_15px_#facc15]
              group
            ">
              <User className="
                w-5 h-5
                text-white/80
                transition
                group-hover:text-black
              " />
            </div>
          </Link>

          {/* 🛒 Carrito */}
          <Link href="/carrito">
            <div className="
              relative
              w-10 h-10 flex items-center justify-center
              rounded-full
              bg-white/5
              border border-white/10
              backdrop-blur-md
              cursor-pointer
              transition-all duration-300
              hover:bg-blue-400
              hover:border-blue-400
              hover:shadow-[0_0_15px_#60a5fa]
              group
            ">
              <ShoppingCart className="
                w-5 h-5
                text-white/80
                transition
                group-hover:text-black
              " />

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