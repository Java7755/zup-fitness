export default function FuncionalPage() {
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
            ENTRENAMIENTO FUNCIONAL ⚡
          </h1>

          <p className="text-xl text-white font-semibold mb-4">
            Movete mejor. Rendí más. Sentite fuerte en todo.
          </p>

          <p className="text-gray-400">
            Fuerza, resistencia y movilidad en un solo sistema
          </p>

        </div>
      </section>

      {/* 💃 SECCIÓN VISUAL FEMENINA */}
      <section className="py-20 px-6 bg-black text-center overflow-hidden">

        <h2 className="text-3xl font-bold text-pink-400 mb-6">
          Fuerte, ágil y segura 🔥
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Este entrenamiento está pensado para que te sientas bien con tu cuerpo,
          ganes confianza y disfrutes moverte.
        </p>

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            {
              src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
              text: "Confianza 💪"
            },
            {
              src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
              text: "Energía ⚡"
            },
            {
              src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
              text: "Actitud 🔥"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                relative rounded-xl overflow-hidden
                transform hover:scale-105 transition duration-300
                animate-float
              "
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img
                src={item.src}
                alt="fitness mujer"
                className="w-full h-72 object-cover opacity-90"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

              {/* texto */}
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                {item.text}
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* 🚨 PROBLEMA */}
      <section className="py-20 px-6 bg-[#111] text-center">

        <h2 className="text-3xl font-bold text-red-400 mb-6">
          Entrenás… pero no lo aplicás en tu vida
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Máquinas, rutinas aisladas… pero después te cansás rápido,
          te falta movilidad o coordinación.  
          No todo es levantar peso.
        </p>

      </section>

      {/* 💣 DIFERENCIAL */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">

        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Entrená como se mueve tu cuerpo
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {[
            {
              title: "Movimientos reales",
              desc: "Ejercicios que aplicás en la vida diaria."
            },
            {
              title: "Entrenamiento dinámico",
              desc: "Nada aburrido, todo el cuerpo en acción."
            },
            {
              title: "Rendimiento total",
              desc: "Fuerza + cardio + coordinación."
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="
                relative bg-[#2a2a2a] p-6 rounded-xl 
                border border-pink-500/30
                shadow-[0_0_20px_rgba(236,72,153,0.2)]
                hover:scale-105 transition
              "
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(236,72,153,0.4),transparent_70%)]" />

              <h3 className="relative text-pink-400 font-bold mb-2">
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
            "⚡ Más agilidad y coordinación",
            "💪 Fuerza funcional real",
            "🔥 Mayor resistencia física",
            "🧠 Mejor conexión cuerpo-mente",
            "🦵 Más estabilidad y equilibrio",
            "🏃 Mejor rendimiento en tu día a día"
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-[#1f1f1f] p-4 rounded-lg border border-gray-700 hover:border-pink-400 transition"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* ⏳ FILTRO */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">

        <h2 className="text-3xl font-bold text-red-400 mb-6">
          No es para entrenar “por entrenar”
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-4">
          Este programa es para los que quieren sentirse mejor en todo.
        </p>

        <p className="text-white font-semibold">
          Si querés rendir en serio… este es tu entrenamiento.
        </p>

      </section>

      {/* 🚀 CTA */}
      <section className="py-24 text-center bg-black">

        <h2 className="text-4xl font-bold mb-6">
          Empezá a moverte como nunca
        </h2>

        <p className="text-gray-400 mb-8">
          Más ágil, más fuerte, más completo
        </p>

        <a
          href="https://wa.me/5411961883321?text=Hola!%20Quiero%20empezar%20ENTRENAMIENTO%20FUNCIONAL%20⚡"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-pink-500 text-black 
            font-bold px-10 py-5 rounded-xl 
            shadow-[0_0_25px_#ec4899]
            hover:scale-105 hover:shadow-[0_0_40px_#ec4899]
            transition text-lg
          "
        >
          💬 Empezar funcional por WhatsApp
        </a>

      </section>

    </div>
  );
}