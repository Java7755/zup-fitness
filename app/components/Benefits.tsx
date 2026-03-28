import React from 'react'

const benefits = [
  { title: "Planes Personalizados", desc: "Entrenamientos adaptados a tu objetivo." },
  { title: "Soporte Profesional", desc: "Entrenadores y nutricionistas expertos." },
  { title: "Resultados Reales", desc: "Historias de éxito de nuestra comunidad." },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white text-center px-4">
      <h2 className="text-4xl font-bold mb-12">¿Por qué ZUP Fitness?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((b) => (
          <div key={b.title} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}