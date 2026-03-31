'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {

  const phone = "5491161883321"

  const message = `Hola! Quiero empezar el reto de 21 días 💪 Vi la página y quiero más info`

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 🎥 VIDEO DESDE /public */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY OSCURO + MEJORA VISUAL */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* GRADIENTE PARA PROFUNDIDAD */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-24 min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          {/* TITULO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Nada cambia...
            <br />
            <span className="text-yellow-400">
              hasta que vos cambiás
            </span>
          </motion.h1>

          {/* SUBTITULO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            21 días para transformar tu físico y tu mentalidad.
            <br />
            <span className="text-white font-semibold">
              Sistema simple. Resultado real.
            </span>
          </motion.p>

          {/* PRUEBA SOCIAL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6"
          >
            <span className="text-sm text-gray-400">
              +100 personas ya empezaron el cambio
            </span>
          </motion.div>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >

            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              className="
                px-8 py-4 
                bg-yellow-400 text-black font-bold 
                rounded-xl 
                hover:scale-105 
                hover:shadow-[0_0_25px_rgba(255,255,0,0.6)]
                transition-all duration-300
              "
            >
              Empezar ahora
            </a>

            <a
              href="#plans"
              className="
                px-8 py-4 
                border border-white/20 text-white font-semibold 
                rounded-xl 
                hover:bg-white hover:text-black 
                transition-all duration-300
              "
            >
              Ver programas
            </a>

          </motion.div>

          {/* URGENCIA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs text-gray-500 mt-6"
          >
            Cupos limitados esta semana
          </motion.p>

        </motion.div>
      </div>

    </section>
  )
}