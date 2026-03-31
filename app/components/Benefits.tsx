import React from 'react'

const benefits = [
  { title: "Planes Personalizados", desc: "Entrenamientos adaptados a tu objetivo." },
  { title: "Soporte Profesional", desc: "Entrenadores y nutricionistas expertos." },
  { title: "Resultados Reales", desc: "Historias de éxito de nuestra comunidad." },
]

export default function Benefits() {
  return (
    <div className="text-center px-4">

      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-neonYellow glow-neon">
        ¿Por qué ZUP Fitness? ⚡
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {benefits.map((b) => (
          <div
            key={b.title}
            className="
              p-6 rounded-2xl 
              bg-gradient-to-b from-gray-800 to-gray-900
              border border-gray-700
              shadow-lg
              hover:shadow-[0_0_20px_#faff00]
              hover:border-yellow-400
              transition duration-300
              relative
              overflow-hidden
            "
          >

            {/* ⚡ Rayo decorativo */}
            <span className="absolute top-2 right-3 text-yellow-400 opacity-20 text-2xl">
              ⚡
            </span>

            {/* Título */}
            <h3 className="text-2xl font-semibold mb-3 text-neonYellow">
              {b.title}
            </h3>

            {/* Descripción */}
            <p className="text-gray-300">
              {b.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  )
}