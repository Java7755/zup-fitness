export default function TransformacionPage() {
  return (
    <div className="text-white min-h-screen bg-[#0a0a0a] font-sans">

      {/* 🔥 HERO */}
      <section className="
        relative py-28 text-center overflow-hidden
        bg-gradient-to-b from-black via-[#1a1a1a] to-black
      ">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.4),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 mb-6">
            TRANSFORMACIÓN TOTAL 🔥
          </h1>

          <p className="text-xl text-white font-semibold mb-4">
            Cambiá tu cuerpo, tu mente y tu disciplina
          </p>

          <p className="text-gray-400">
            No es un programa… es un antes y un después
          </p>

        </div>
      </section>

      {/* 🚨 PROBLEMA EMOCIONAL */}
      <section className="py-20 px-6 bg-[#111] text-center">

        <h2 className="text-3xl font-bold text-red-400 mb-6">
          Sabés que podés más… pero no estás ahí
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Te mirás al espejo y sabés que podrías estar mejor.  
          Tenés ganas, pero te falta dirección, constancia y un sistema real.
        </p>

      </section>

      {/* 💣 DIFERENCIAL */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">

        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Esto no es solo entrenamiento
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {[
            {
              title: "Entrenamiento completo",
              desc: "Fuerza, cardio y estructura total."
            },
            {
              title: "Cambio mental",
              desc: "Disciplina, enfoque y hábitos reales."
            },
            {
              title: "Resultados visibles",
              desc: "Un físico completamente distinto."
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="
                relative bg-[#2a2a2a] p-6 rounded-xl 
                border border-orange-700/30
                shadow-[0_0_20px_rgba(255,80,0,0.2)]
                hover:scale-105 transition
              "
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,80,0,0.4),transparent_70%)]" />

              <h3 className="relative text-yellow-400 font-bold mb-2">
                {item.title}
              </h3>
              <p className="relative text-gray-300 text-sm">
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
            "🔥 Bajar grasa y ganar músculo",
            "💪 Transformar tu físico completo",
            "⚡ Tener más energía diaria",
            "🧠 Crear disciplina real",
            "📈 Progreso constante",
            "🪞 Verte y sentirte diferente"
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-[#1f1f1f] p-4 rounded-lg border border-gray-700 hover:border-yellow-400 transition"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* ⏳ FILTRO FUERTE */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">

        <h2 className="text-3xl font-bold text-red-400 mb-6">
          No es para cualquiera
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-4">
          Este programa requiere compromiso real.
        </p>

        <p className="text-white font-semibold">
          Si estás listo para cambiar en serio… este es tu momento.
        </p>

      </section>

      {/* 🚀 CTA */}
      <section className="py-24 text-center bg-black">

        <h2 className="text-4xl font-bold mb-6">
          Tu transformación empieza hoy
        </h2>

        <p className="text-gray-400 mb-8">
          La versión que querés ser… se construye ahora
        </p>

        <a
          href="https://wa.me/5411961883321?text=Hola!%20Quiero%20empezar%20TRANSFORMACIÓN%20TOTAL%20🔥"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-green-500 text-black 
            font-bold px-10 py-5 rounded-xl 
            shadow-[0_0_25px_#22c55e]
            hover:scale-105 hover:shadow-[0_0_40px_#22c55e]
            transition text-lg
          "
        >
          💬 Empezar transformación por WhatsApp
        </a>

      </section>

    </div>
  );
}