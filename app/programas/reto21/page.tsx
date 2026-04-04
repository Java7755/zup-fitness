import Link from "next/link";

export default function Reto21Page() {
  return (
    <div className="text-white min-h-screen bg-[#0a0a0a] font-sans">

      {/* 🔥 HERO */}
      <section className="
        relative py-28 text-center
        bg-gradient-to-b from-black via-[#1a1a1a] to-black
      ">

        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.4),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 mb-6">
            RETO 21 DÍAS 🔥
          </h1>

          <p className="text-xl text-white font-semibold mb-4">
            Bajá grasa, activá tu cuerpo y recuperá el control
          </p>

          <p className="text-gray-400">
            Resultados visibles en semanas con un sistema real
          </p>

        </div>
      </section>

      {/* 🚨 PROBLEMA */}
      <section className="py-20 px-6 bg-[#111] text-center">

        <h2 className="text-3xl font-bold text-red-400 mb-6">
          Si siempre empezás… pero no terminás
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          No es falta de ganas. Es falta de estructura.
          Sin un sistema claro, es imposible sostener resultados.
        </p>

      </section>

      {/* 💣 DIFERENCIAL */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">

        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Esto no es un plan más
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {[
            {
              title: "Entrenamientos guiados",
              desc: "No pensás, ejecutás. Todo ya está diseñado."
            },
            {
              title: "Progresión diaria",
              desc: "Cada día tiene un objetivo claro."
            },
            {
              title: "Resultados visibles",
              desc: "Cambios reales en pocas semanas."
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="
                bg-[#2a2a2a] p-6 rounded-xl 
                border border-orange-700/30
                shadow-[0_0_20px_rgba(255,80,0,0.2)]
                hover:scale-105 transition
              "
            >
              <h3 className="text-yellow-400 font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ⚡ BENEFICIOS */}
      <section className="py-20 px-6 bg-[#111] text-center">

        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Lo que vas a lograr
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">

          {[
            "🔥 Reducir grasa corporal",
            "💪 Activar tu musculatura",
            "⚡ Más energía diaria",
            "🧠 Disciplina real",
            "🏃 Mayor rendimiento",
            "📈 Verte mejor en el espejo"
          ].map((item, i) => (
            <div key={i} className="bg-[#1f1f1f] p-4 rounded-lg border border-gray-700">
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* 🚀 CTA FINAL */}
      <section className="py-24 text-center bg-black">

        <h2 className="text-4xl font-bold mb-6">
          21 días pueden cambiar todo
        </h2>

        <p className="text-gray-400 mb-8">
          La diferencia entre seguir igual o avanzar… es empezar hoy
        </p>

        <a
          href="https://wa.me/5411961883321?text=Hola!%20Quiero%20empezar%20el%20RETO%2021%20DÍAS%20🔥"
          target="_blank"
          className="
            inline-block
            bg-green-500 text-black 
            font-bold px-10 py-5 rounded-xl 
            shadow-[0_0_25px_#22c55e]
            hover:scale-105 hover:shadow-[0_0_40px_#22c55e]
            transition text-lg
          "
        >
          💬 Empezar ahora por WhatsApp
        </a>

      </section>

    </div>
  );
}