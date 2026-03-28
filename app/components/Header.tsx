import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md bg-black/70 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          ZUP<span className="text-green-500">FITNESS</span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/">Inicio</Link>
          <Link href="/metodo">Método</Link>
          <Link href="/programas">Programas</Link>
          <Link href="/coaching">Coaching</Link>
          <Link href="/recursos">Recursos</Link>
          <Link href="/reto-21-dias" className="text-green-400">
            Reto 21 días
          </Link>
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-4">
          
          {/* Secondary CTA */}
          <Link href="/programas">
            <button className="hidden md:block border border-green-500 text-green-400 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-black transition">
              Ver programas
            </button>
          </Link>

          {/* Primary CTA */}
          <Link href="/reto-21-dias">
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-xl">
              Unirme al reto
            </button>
          </Link>

          {/* Icons */}
          <User className="cursor-pointer hover:text-green-400" />
          <ShoppingCart className="cursor-pointer hover:text-green-400" />

        </div>
      </div>
    </header>
  );
}