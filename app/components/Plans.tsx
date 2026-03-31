'use client'
import React, { useState } from 'react'

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
  const [hovered, setHovered] = useState<number | null>(null)

  const phone = "5491161883321"

  return (
    <section id="plans" className="py-20 bg-black text-white text-center px-4">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Elegí tu transformación ⚡
      </h2>

      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        No es solo entrenar. Es tener un sistema que te haga avanzar de verdad.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {plans.map((plan, i) => {
          const isCenter = plan.highlight

          const mainMessage = `Hola! Quiero empezar hoy con el plan ${plan.title} 💪 ¿Cómo sigo?`
          const secondaryMessage = `Hola, quiero más info sobre el plan ${plan.title}`

          return (
            <div 
              key={plan.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative p-8 rounded-2xl border
                transition-all duration-300
                bg-gradient-to-b from-gray-800 to-gray-900
                overflow-hidden

                ${isCenter 
                  ? "border-yellow-400 scale-105 shadow-[0_0_30px_rgba(255,255,0,0.25)] z-10" 
                  : "border-white/10"
                }

                ${hovered !== null && hovered !== i 
                  ? "opacity-60 scale-95" 
                  : ""
                }

                ${hovered === i && !isCenter 
                  ? "border-yellow-400 shadow-[0_0_20px_rgba(255,255,0,0.2)] scale-105" 
                  : ""
                }
              `}
            >

              {/* ⚡ RAYO */}
              <span className="absolute top-2 right-3 text-yellow-400 opacity-20 text-2xl">
                ⚡
              </span>

              {/* BADGE */}
              {isCenter && (
                <div className="mb-3 inline-block px-3 py-1 text-xs font-semibold rounded-full bg-yellow-400 text-black shadow-md">
                  MÁS ELEGIDO
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-2">
                {plan.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {plan.description}
              </p>

              <p className="text-3xl font-bold mb-6 text-yellow-400">
                {plan.price}
              </p>

              <ul className="mb-8 space-y-2 text-gray-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 justify-center">
                    <span className="text-yellow-400">✔</span> {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col gap-3">
                
                {/* CTA PRINCIPAL → WHATSAPP */}
                <a 
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(mainMessage)}`}
                  target="_blank"
                  className={`
                    px-6 py-3 rounded-xl font-bold transition 
                    ${isCenter 
                      ? "bg-yellow-400 text-black hover:scale-105" 
                      : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    }
                  `}
                >
                  Empezar ahora
                </a>

                {/* CTA SECUNDARIO */}
                <a 
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(secondaryMessage)}`}
                  target="_blank"
                  className="text-sm text-gray-400 hover:text-yellow-400 transition"
                >
                  Consultar por WhatsApp
                </a>

              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}