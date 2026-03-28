import React from 'react'

const plans = [
  { 
    title: "Básico", 
    price: "$15000/mes", 
    description: "Ideal para empezar y crear el hábito.",
    features: ["Rutina de tonificación", "Plan semanal", "Guía básica"],
    highlight: false
  },
  { 
    title: "Avanzado", 
    price: "$29000/mes", 
    description: "El más elegido para transformar el cuerpo.",
    features: ["Hipertrofia", "Plan semanal + nutrición", "Seguimiento"],
    highlight: true
  },
  { 
    title: "Pro Competición", 
    price: "$49000/mes", 
    description: "Para llevar tu físico al máximo nivel.",
    features: ["Entrenamiento intensivo", "Nutrición completa", "Coaching 1 a 1"],
    highlight: false
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-black text-white text-center px-4">
      
      {/* TITULO */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Elegí tu transformación
      </h2>

      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        No es solo entrenar. Es tener un sistema que te haga avanzar de verdad.
      </p>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.title} 
            className={`p-8 rounded-2xl border transition-all duration-300 
            ${plan.highlight 
              ? "border-red-500 scale-105 bg-white/5 shadow-xl" 
              : "border-white/10 hover:border-white/30"
            }`}
          >
            
            {/* BADGE */}
            {plan.highlight && (
              <p className="text-red-500 font-semibold mb-2">
                Más elegido 🔥
              </p>
            )}

            {/* TITLE */}
            <h3 className="text-2xl font-semibold mb-2">
              {plan.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 mb-4">
              {plan.description}
            </p>

            {/* PRICE */}
            <p className="text-3xl font-bold mb-6">
              {plan.price}
            </p>

            {/* FEATURES */}
            <ul className="mb-8 space-y-2 text-gray-300">
              {plan.features.map((f) => (
                <li key={f}>✔ {f}</li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              
              <a 
                href="/reto-21-dias"
                className={`px-6 py-3 rounded-xl font-bold transition 
                ${plan.highlight 
                  ? "bg-red-600 hover:bg-red-700 text-white" 
                  : "border border-white hover:bg-white hover:text-black"
                }`}
              >
                Empezar ahora
              </a>

              <a 
                href="https://wa.me/5491161883321"
                className="text-sm text-gray-400 hover:text-white"
              >
                Consultar por WhatsApp
              </a>

            </div>

          </div>
        ))}
      </div>
    </section>
  )
}