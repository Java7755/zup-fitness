'use client'  // ⚠ Corregido

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Overlay oscuro con degradado para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col justify-center items-center text-center px-4">
        
        {/* Contenido animado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Transforma tu cuerpo. <span className="text-red-500">Supera tus límites.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl mx-auto drop-shadow-md">
            Planes para todos los objetivos: perder grasa, tonificar o competir. Tu transformación empieza hoy.
          </p>
          <a
            href="#plans"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Empieza hoy
          </a>
        </motion.div>
      </div>
    </section>
  )
}