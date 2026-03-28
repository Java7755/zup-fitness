import React from 'react'

const plans = [
  { title: "Básico", price: "$15000/mes", features: ["Tonificación", "Plan Semanal"] },
  { title: "Avanzado", price: "$29000/mes", features: ["Hipertrofia", "Plan Semanal + Nutrición"] },
  { title: "Pro Competición", price: "$49000/mes", features: ["Entrenamiento Intensivo", "Nutrición + Coaching"] },
]

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-bold mb-12">Planes ZUP Fitness</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.title} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <a href="#" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded">Comprar</a>
          </div>
        ))}
      </div>
    </section>
  )
}