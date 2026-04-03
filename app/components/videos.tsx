'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Videos() {

  // Array de videos
  const videoList = [
    "/bancoplano.mp4",
    "/ciclismo.mp4",
    "/correr.mp4",
    "/video-hero.mp4"
  ]

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">

      {/* 🔥 FONDO SUTIL (controlado, no rompe contraste) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 🧠 TITULO PRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Entrená con{" "}
            <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
              técnica real
            </span>
            <br />
            y resultados visibles
          </h2>

          <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            No es solo entrenar.
            <span className="text-white font-semibold"> Es saber cómo hacerlo.</span>
            <br />
            Mirá cómo trabajamos y empezá a conocer nuestro método.
          </p>
        </motion.div>

        {/* 🎥 CARRUSEL */}
        <div className="relative flex overflow-x-auto gap-6 snap-x snap-mandatory pb-6">

          {videoList.map((src, i) => (
            <motion.div
              key={i}
              className="
                flex-shrink-0
                w-[85%] md:w-[45%] lg:w-[30%]
                snap-center
                group
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >

              <div className="
                relative
                rounded-xl
                overflow-hidden
                border border-white/10
                shadow-[0_0_25px_rgba(0,0,0,0.7)]
                transition-all duration-300
                group-hover:scale-[1.03]
              ">

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[260px] md:h-[300px] lg:h-[340px] object-cover"
                >
                  <source src={src} type="video/mp4" />
                </video>

                {/* 🔥 OVERLAY CORREGIDO */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300" />

                {/* ⚡ BORDE FITNESS PRO */}
                <div className="
                  absolute inset-0
                  rounded-xl
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                  border border-yellow-400/40
                  shadow-[0_0_25px_rgba(250,204,21,0.4)]
                " />

              </div>

            </motion.div>
          ))}

        </div>

        {/* 👇 MICRO COPY */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm md:text-base tracking-wide">
            Deslizá y descubrí cómo entrenamos →
          </p>
        </div>

      </div>
    </section>
  )
}