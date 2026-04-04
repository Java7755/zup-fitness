import Link from "next/link";

export default function MetodoPage() {
  return (
    <div className="text-white min-h-screen font-sans bg-[#1a1a1a]">

      {/* 🔥 HERO */}
      <section className="
        relative py-28 text-center overflow-hidden
        bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a] to-black
      ">

        {/* textura óxido */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(183,65,14,0.4),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-6">
            SISTEMA Z-UP ⚡
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-4">
            No seguimos rutinas genéricas…
          </p>

          <p className="text-white text-xl md:text-2xl font-semibold">
            construimos resultados con estructura, progresión y control real
          </p>

        </div>
      </section>

      {/* 🔥 BLOQUE FUERTE (COPY QUE VENDE) */}
      <section className="py-20 px-6 bg-[#222222]">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
            Entrenar sin método es perder tiempo
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            La mayoría entrena sin dirección, sin progresión y sin resultados.
            <br /><br />
            En Z-UP aplicamos principios reales del entrenamiento:
            control de cargas, adaptación progresiva y planificación estratégica.
            <br /><br />
            No improvisamos. Ejecutamos.
          </p>

        </div>
      </section>

      {/* 🔥 TARJETAS DIFERENCIALES */}
      <section className="
        py-20 px-6
        bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a] to-black
      ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "PROGRESIÓN REAL",
              desc: "Aumentamos cargas, volumen o intensidad de forma controlada. Cada semana tiene un objetivo."
            },
            {
              title: "ENTRENAMIENTO INTELIGENTE",
              desc: "No es entrenar más… es entrenar mejor. Selección de ejercicios con propósito."
            },
            {
              title: "ADAPTACIÓN PERSONAL",
              desc: "Tu plan evoluciona con vos. No usamos plantillas genéricas."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                relative p-8 rounded-xl
                bg-[#2b2b2b]
                border border-orange-800/30
                shadow-[0_0_20px_rgba(255,80,0,0.15)]
                hover:scale-105 transition
              "
            >
              {/* efecto óxido */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,100,0,0.4),transparent_70%)]" />

              <h3 className="text-orange-400 text-xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm relative z-10">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 DISCIPLINAS CON ESTILO */}
      <section className="py-20 px-6 bg-[#222222]">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12">
            Un sistema, múltiples disciplinas
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "Musculación",
              "Cross Training",
              "Funcional",
              "Running"
            ].map((item, i) => (
              <span
                key={i}
                className="
                  px-6 py-2 rounded-full
                  bg-black border border-orange-700/40
                  text-orange-400 font-semibold
                  shadow-[0_0_10px_rgba(255,80,0,0.2)]
                "
              >
                {item}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* 🔥 CÓMO LO APLICAMOS (ORO PURO) */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-16">
            Cómo trabajamos
          </h2>

          <div className="space-y-10">

            {[
              {
                step: "01",
                title: "Evaluación inicial",
                desc: "Analizamos tu estado físico, objetivo y punto de partida real."
              },
              {
                step: "02",
                title: "Plan estructurado",
                desc: "Diseñamos un programa específico para vos, con progresión."
              },
              {
                step: "03",
                title: "Seguimiento",
                desc: "Ajustamos en base a tu evolución. Nada queda librado al azar."
              },
              {
                step: "04",
                title: "Resultado",
                desc: "Cambio físico + mental. Esto es lo que buscás."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-6
                  border-l-2 border-orange-500 pl-6
                "
              >
                <span className="text-orange-400 font-bold text-xl">
                  {item.step}
                </span>

                <div>
                  <h3 className="text-white font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-24 text-center bg-[#1a1a1a]">

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Si entrenás sin sistema, estás adivinando
        </h2>

        <p className="text-gray-400 mb-8">
          Entrená con estructura. Entrená con Z-UP.
        </p>

        <Link href="/programas">
          <button className="
            bg-yellow-400 text-black 
            font-bold px-8 py-4 rounded-xl 
            shadow-[0_0_25px_#facc15]
            hover:scale-105 
            transition text-lg
          ">
            ⚡ Ver programas
          </button>
        </Link>

      </section>

    </div>
  );
}