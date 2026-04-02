'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Videos() {
  // Array de videos, podés agregar los tuyos aquí
  const videoList = [
    "/bancoplano.mp4",
    "/ciclismo.mp4",
    "/correr.mp4",
    "/video-hero.mp4"
  ]

  return (
    <section className="relative w-full bg-black/90 py-16 px-4 md:px-8">
      
      {/* TÍTULO CENTRAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
          Mirá entrenamientos profesionales
        </h2>
        <p className="text-white/80 md:text-lg max-w-2xl mx-auto">
          Clips de alta calidad para inspirarte y motivarte a transformar tu cuerpo.  
          Próximamente tus propios videos.
        </p>
      </motion.div>

      {/* CARRUSEL DE VIDEOS */}
      <div className="relative flex overflow-x-auto space-x-6 snap-x snap-mandatory pb-4">
        {videoList.map((src, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-[90%] md:w-[45%] lg:w-[35%] snap-center relative rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-xl"
            >
              <source src={src} type="video/mp4" />
            </video>

            {/* OVERLAY SUAVE */}
            <div className="absolute inset-0 bg-black/20 rounded-xl" />
          </motion.div>
        ))}
      </div>

      {/* INDICACIÓN DESPLAZAMIENTO */}
      <div className="mt-4 text-center text-white/60 text-sm md:text-base">
        Deslizá para ver más entrenamientos →
      </div>

    </section>
  )
}