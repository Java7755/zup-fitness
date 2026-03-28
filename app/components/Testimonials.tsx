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
    <section className="py-20 bg-white text-center px-4">
      <h2 className="text-4xl font-bold mb-12">Historias de Éxito</h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            className="p-6 border rounded-lg shadow bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Contenedor de imagen para mantener proporción */}
            <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
  <Image
    src={t.img}
    alt={t.name}
    fill
    sizes="(max-width: 768px) 6rem, 96px"  // ✅ esto es lo que agrega Next.js para optimizar
    style={{ objectFit: 'cover' }}
  />
</div>

            <p className="mb-2 text-gray-700">{t.text}</p>
            <h4 className="font-bold text-gray-900">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  )
}