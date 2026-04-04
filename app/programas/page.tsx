import Link from "next/link";

export default function ProgramasPage() {
  return (
    <div className="text-white min-h-screen font-sans bg-[#0a0a0a]">

      {/* 🔥 HERO */}
      <section className="
        relative py-28 text-center overflow-hidden
        bg-gradient-to-b from-black via-[#1a1a1a] to-black
      ">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.4),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-6">
            PROGRAMAS Z-UP ⚡
          </h1>

          <p className="text-gray-400 text-lg">
            No todos entrenan igual…
          </p>

          <p className="text-white text-xl md:text-2xl font-semibold">
            cada objetivo necesita un sistema distinto
          </p>
        </div>
      </section>

      {/* 🔥 INTRO */}
      <section className="py-20 px-6 bg-[#111111] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          Elegí tu transformación
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto">
          No es solo entrenar… es avanzar con dirección,
          con un sistema diseñado para que veas resultados reales.
        </p>
      </section>

      {/* 🔥 PROGRAMAS */}
      <section className="
        py-20 px-6
        bg-gradient-to-b from-[#1a1a1a] via-[#222] to-black
      ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "🔥 RETO 21 DÍAS",
              desc: "El programa más elegido para activar el cambio.",
              tag: "Más elegido",
              href: "/programas/reto21" // 🔥 CAMBIADO
            },
            {
              title: "💪 VOLUMEN LIMPIO",
              desc: "Construí músculo sin taparte.",
              tag: "Ganancia muscular",
              href: "/programas/volumen"
            },
            {
              title: "⚡ DEFINICIÓN TOTAL",
              desc: "Bajá grasa y marcá tu cuerpo.",
              tag: "Alta intensidad",
              href: "/programas/definicion"
            },
            {
              title: "🏃 RUNNING PRO",
              desc: "Mejorá resistencia y rendimiento.",
              tag: "Performance",
              href: "/programas/corriendo"
            },
            {
              title: "🔥 TRANSFORMACIÓN TOTAL",
              desc: "Cambio físico y mental completo.",
              tag: "Full body",
              href: "/programas/transformacion"
            },
            {
              title: "⚙️ FUNCIONAL PRO",
              desc: "Movete mejor, rendí más.",
              tag: "Atletas",
              href: "/programas/funcional"
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                relative p-8 rounded-xl
                bg-[#2b2b2b]
                border border-orange-800/30
                shadow-[0_0_25px_rgba(255,80,0,0.15)]
                hover:scale-105 transition
              "
            >
              {/* fondo sin bloquear click */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle,rgba(255,80,0,0.4),transparent_70%)]" />

              <div className="relative z-10">

                {/* TAG */}
                <span className="text-xs text-orange-400 font-semibold">
                  {item.tag}
                </span>

                <h3 className="text-xl font-bold text-yellow-400 mt-2 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm mb-6">
                  {item.desc}
                </p>

                {/* 🔥 LINK ARREGLADO */}
                <Link
                  href={item.href}
                  className="
                    block text-center
                    w-full bg-yellow-400 text-black 
                    font-bold py-3 rounded-lg
                    shadow-[0_0_15px_#facc15]
                    hover:scale-105 hover:shadow-[0_0_25px_#facc15]
                    transition
                  "
                >
                  ⚡ Ver programa
                </Link>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 BLOQUE FINAL */}
      <section className="py-24 px-6 bg-black text-center">

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Elegí tu camino
        </h2>

        <p className="text-gray-400 mb-8">
          El cambio empieza cuando dejás de dudar
        </p>

        <Link
          href="/#planes"
          className="
            inline-block
            bg-yellow-400 text-black 
            font-bold px-8 py-4 rounded-xl 
            shadow-[0_0_25px_#facc15]
            hover:scale-105 hover:shadow-[0_0_40px_#facc15]
            transition text-lg
          "
        >
          ⚡ Ver planes ahora
        </Link>

      </section>

    </div>
  );
}