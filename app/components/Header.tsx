// components/Header.tsx
'use client'

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="
      w-full fixed top-0 z-50
      bg-black/70 backdrop-blur-md
      border-b border-white/10
    ">

      {/* Línea glow animada */}
      <div className="h-[2px] w-full bg-gradient-to-r from-yellow-400 via-blue-400 to-violet-500 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="
            flex items-center gap-2 text-2xl font-extrabold tracking-wide 
            text-violet-400 
            drop-shadow-[0_0_10px_#8b5cf6]
            hover:scale-105 transition
          "
        >
          ⚡ ZUP
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {["Inicio", "Método", "Programas", "Coaching", "Recursos"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/ /g, "-")}`}
              className="
                text-white/80
                hover:text-yellow-400 
                hover:drop-shadow-[0_0_8px_#faff00]
                transition
              "
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-4">
          
          {/* Secondary CTA */}
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

          {/* 🔥 Primary CTA (MEJORADO) */}
          <Link href="/reto-21-dias">
            <button className="
              bg-yellow-400 text-black 
              font-bold px-5 py-2 rounded-xl 
              shadow-[0_0_15px_#faff00]
              hover:scale-105 
              hover:shadow-[0_0_25px_#faff00]
              transition
            ">
              ⚡ Reto 21 días
            </button>
          </Link>

          {/* Icons */}
          <User className="
            cursor-pointer 
            text-blue-400 
            hover:text-yellow-400 
            hover:drop-shadow-[0_0_8px_#faff00]
            transition
          " />

          <ShoppingCart className="
            cursor-pointer 
            text-blue-400 
            hover:text-yellow-400 
            hover:drop-shadow-[0_0_8px_#faff00]
            transition
          " />
        </div>
      </div>
    </header>
  );
}