'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex flex-col justify-center items-center text-center px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          {/* TITULO */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
            El cuerpo que querés{" "}
            <span className="text-red-500">no se construye solo</span>
          </h1>

          {/* SUBTITULO */}
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Tenés 21 días para cambiar tu físico y tu mentalidad.
            <br />
            <span className="text-white font-semibold">
              Esta vez con un sistema real.
            </span>
          </p>

          {/* PRUEBA SOCIAL MINI */}
          <p className="text-sm text-gray-400 mb-6">
            🔥 +100 personas ya empezaron el cambio
          </p>

          {/* BOTONES */}
          <div className="flex gap-4 justify-center flex-wrap">

            {/* CTA PRINCIPAL */}
            <a
              href="/reto-21-dias"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Empezar ahora
            </a>

            {/* CTA SECUNDARIO */}
            <a
              href="#plans"
              className="px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Ver programas
            </a>

          </div>

          {/* URGENCIA SUTIL */}
          <p className="text-xs text-gray-500 mt-6">
            ⚠️ Cupos limitados esta semana
          </p>

        </motion.div>
      </div>
    </section>
  )
}