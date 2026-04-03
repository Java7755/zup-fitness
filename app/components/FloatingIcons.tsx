'use client'

import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FloatingIcons() {
  return (
    <div className="fixed right-5 bottom-24 flex flex-col gap-5 z-50">

      {/* INSTAGRAM (PRIMERO) */}
      <a
        href="https://www.instagram.com/zup.fitness/?hl=es-la"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ir a Instagram"
        className="
          group relative
          p-[2px] rounded-full
          bg-gradient-to-br from-gray-300 via-gray-500 to-gray-800
          shadow-[0_0_15px_rgba(255,255,255,0.15)]
          hover:scale-110
          transition-all duration-300
        "
      >
        <div className="
          flex items-center justify-center
          bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500
          text-white
          p-4
          rounded-full
        ">
          <FaInstagram size={26} />
        </div>

        {/* Tooltip */}
        <span className="
          absolute right-16 top-1/2 -translate-y-1/2
          bg-black/80 text-white text-xs
          px-2 py-1 rounded
          opacity-0 group-hover:opacity-100
          transition
          whitespace-nowrap
        ">
          Seguime en Instagram
        </span>
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5491161883321?text=Hola!%20Quiero%20info%20del%20reto%2021%20días"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="
          group relative
          p-[2px] rounded-full
          bg-gradient-to-br from-gray-300 via-gray-500 to-gray-800
          shadow-[0_0_15px_rgba(255,255,255,0.15)]
          hover:scale-110
          transition-all duration-300
        "
      >
        <div className="
          flex items-center justify-center
          bg-green-500 hover:bg-green-600
          text-white
          p-4
          rounded-full
          transition
        ">
          <FaWhatsapp size={26} />
        </div>

        {/* Tooltip */}
        <span className="
          absolute right-16 top-1/2 -translate-y-1/2
          bg-black/80 text-white text-xs
          px-2 py-1 rounded
          opacity-0 group-hover:opacity-100
          transition
          whitespace-nowrap
        ">
          Escribime por WhatsApp
        </span>
      </a>

    </div>
  );
}