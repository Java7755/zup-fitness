'use client'

export default function ComoFunciona() {

  const phone = "5491161883321"
  const message = `Hola! Quiero empezar el reto de 21 días 💪 Vi cómo funciona y quiero más info`

  return (
    <section id="como-funciona" className="py-24 px-4 bg-black text-white">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Cómo funciona <span className="text-yellow-400">ZUP FITNESS</span>
        </h2>

        <p className="text-gray-400 text-lg">
          No es magia. Es un sistema simple que te lleva a resultados reales.
        </p>
      </div>

      {/* PASOS */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {[
          {
            title: "1. Evaluación",
            desc: "Analizamos tu punto actual, hábitos y objetivo real.",
          },
          {
            title: "2. Plan personalizado",
            desc: "Entrenamiento y guía adaptados 100% a vos.",
          },
          {
            title: "3. Seguimiento",
            desc: "Te acompañamos para que no abandones.",
          },
          {
            title: "4. Resultados",
            desc: "Ajustamos todo para que progreses de verdad.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl border border-white/10 hover:border-yellow-400 transition"
          >
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* DIFERENCIAL */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Esto es lo que nos hace diferentes
        </h3>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          
          <ul className="space-y-3 text-gray-400">
            <li>❌ Rutinas genéricas</li>
            <li>❌ Falta de motivación</li>
            <li>❌ Abandonar a la semana</li>
          </ul>

          <ul className="space-y-3 text-white font-medium">
            <li>✅ Plan adaptado a tu vida</li>
            <li>✅ Seguimiento real</li>
            <li>✅ Resultados visibles</li>
          </ul>

        </div>
      </div>

      {/* RESULTADO */}
      <div className="text-center mt-20 max-w-2xl mx-auto">
        <p className="text-xl text-gray-300">
          En pocas semanas vas a sentir más energía, más fuerza y empezar a ver cambios reales en tu cuerpo.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-[0_0_25px_#facc15] transition-all duration-300"
        >
          Quiero empezar ahora →
        </a>
      </div>

    </section>
  )
}