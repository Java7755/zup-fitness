'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  { name: "Lucas", text: "Perdí 10kg en 3 meses y nunca me sentí mejor.", img: "/test1.jpg" },
  { name: "María", text: "Entrenamientos claros y motivadores. ¡Me encanta!", img: "/test2.jpg" },
]

export default function Testimonials() {
  return (
    <div className="text-center px-4">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-neonYellow glow-neon">
        Historias de Transformacion 
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
        
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            className="
              p-6 rounded-2xl 
              bg-gradient-to-b from-gray-800 to-gray-900
              border border-gray-700
              shadow-lg 
              hover:shadow-[0_0_20px_#faff00]
              hover:border-yellow-400
              transition duration-300 
              flex-1
              relative
              overflow-hidden
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >

            {/* ⚡ Rayo decorativo */}
            <span className="absolute top-2 right-3 text-yellow-400 opacity-20 text-2xl">
              ⚡
            </span>

            {/* Imagen */}
            <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-yellow-400 shadow-[0_0_10px_#faff00]">
              <Image
                src={t.img}
                alt={t.name}
                fill
                sizes="(max-width: 768px) 6rem, 96px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Texto testimonial */}
            <p className="mb-4 text-white/80 italic">
              {t.text}
            </p>

            {/* Nombre */}
            <h4 className="font-bold text-neonYellow">
              {t.name}
            </h4>

          </motion.div>
        ))}

      </div>
    </div>
  )
}