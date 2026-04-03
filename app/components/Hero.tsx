'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {

  const phone = "5491161883321"
  const message = `Hola! Quiero empezar el reto de 21 días 💪 Vi la página y quiero más info`

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 🎥 VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>

      {/* 🔥 OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* 🔥 GRADIENTE PROFUNDIDAD */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />

      {/* 🔥 GLOW CENTRAL SUAVE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_70%)]" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-28 min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          {/* 🔴 INSTAGRAM */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <a
              href="https://www.instagram.com/zup.fitness/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                px-4 py-2
                rounded-full
                bg-gradient-to-r from-pink-500/20 to-red-500/20
                border border-pink-400/30
                text-pink-400 text-xs md:text-sm
                tracking-wide
                hover:scale-105 hover:text-white
                hover:border-pink-400/60
                hover:shadow-[0_0_20px_rgba(244,63,94,0.6)]
                transition-all duration-300
                group
              "
            >

              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-red-400 group-hover:scale-110 transition"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </motion.div>

              <span className="font-medium">
                + de 2000 personas siguen ZUP Fitness →
              </span>

            </a>
          </motion.div>

          {/* 💥 TITULO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Transformá tu cuerpo en{" "}
            <span className="text-yellow-400 drop-shadow-[0_0_15px_#facc15]">
              21 días
            </span>
            <br />
            <span className="text-white/90">
              sin dietas extremas ni perder tiempo
            </span>
          </motion.h1>

          {/* ⚡ SUBTITULO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Entrenamiento + Nutrición +
            <br />
            <span className="text-white font-semibold">
              Seguimiento personalizado adaptado a vos
            </span>
          </motion.p>

          {/* 🔥 PRUEBA SOCIAL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6 flex gap-4 justify-center flex-wrap text-sm"
          >
            <span className="text-gray-300">🔥 +100 personas ya empezaron</span>
            <span className="text-gray-400">⭐ Resultados reales</span>
            <span className="text-gray-500">📈 Cambios en semanas</span>
          </motion.div>

          {/* 🔥 BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >

            {/* CTA PRINCIPAL */}
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-4 
                bg-yellow-400 text-black font-bold 
                rounded-xl 
                shadow-[0_0_20px_#facc15]
                hover:scale-105 
                hover:shadow-[0_0_35px_#facc15]
                transition-all duration-300
              "
            >
              ⚡ Empezar ahora
            </a>

            {/* CTA SECUNDARIO (SCROLL) */}
            <a
              href="#como-funciona"
              className="
                px-8 py-4 
                border border-white/20 text-white font-semibold 
                rounded-xl 
                hover:bg-white/10 
                hover:scale-105
                transition-all duration-300
              "
            >
              Ver cómo funciona ↓
            </a>

          </motion.div>

          {/* ⚠️ URGENCIA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs text-gray-500 mt-6 mb-12"
          >
            ⚠️ Cupos limitados esta semana
          </motion.p>

        </motion.div>
      </div>

    </section>
  )
}