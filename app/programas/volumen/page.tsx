export default function VolumenPage() {
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
            VOLUMEN LIMPIO 💪
          </h1>

          <p className="text-xl text-white font-semibold mb-4">
            Ganá masa muscular sin acumular grasa
          </p>

          <p className="text-gray-400">
            Construí un físico fuerte, estético y funcional
          </p>

        </div>
      </section>

      {/* 🚨 PROBLEMA */}
      <section className="py-20 px-6 bg-[#111] text-center">

        <h2 className="text-3xl font-bold text-red-400 mb-6">
          Subir de peso no es crecer bien
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Muchos intentan ganar músculo… pero terminan tapados,
          sin forma y teniendo que empezar de cero otra vez.
        </p>

      </section>

      {/* 💣 DIFERENCIAL */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">

        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Acá se construye músculo de verdad
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {[
            {
              title: "Entrenamiento estructurado",
              desc: "Cada sesión tiene un objetivo claro de crecimiento."
            },
            {
              title: "Progresión inteligente",
              desc: "Aumentás carga, volumen y rendimiento."
            },
            {
              title: "Control de grasa",
              desc: "Subís limpio, sin arruinar tu definición."
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
            "💪 Aumentar masa muscular real",
            "🔥 Mantener bajo el % de grasa",
            "⚡ Mejorar fuerza y rendimiento",
            "🏋️ Tener un físico más grande y marcado",
            "🧠 Entrenar con estrategia, no al azar",
            "📈 Ver progreso constante"
          ].map((item, i) => (
            <div key={i} className="bg-[#1f1f1f] p-4 rounded-lg border border-gray-700">
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* ⏳ FILTRO */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">

        <h2 className="text-3xl font-bold text-red-400 mb-6">
          No es para cualquiera
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-4">
          Este programa es para personas que quieren tomarse en serio su físico.
        </p>

        <p className="text-white font-semibold">
          Si querés crecer de verdad… este es tu camino.
        </p>

      </section>

      {/* 🚀 CTA */}
      <section className="py-24 text-center bg-black">

        <h2 className="text-4xl font-bold mb-6">
          Empezá a construir tu mejor versión
        </h2>

        <p className="text-gray-400 mb-8">
          No se trata de subir peso… se trata de hacerlo bien
        </p>

        <a
          href="https://wa.me/5411961883321?text=Hola!%20Quiero%20empezar%20VOLUMEN%20LIMPIO%20💪"
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
          💬 Empezar volumen por WhatsApp
        </a>

      </section>

    </div>
  );
}