import Link from "next/link";

export default function ResultadosPage() {
  return (
    <div className="bg-fitnessBlack text-white min-h-screen font-sans">

      {/* 🔥 HERO RESULTADOS */}
      <section className="relative py-24 text-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,0,0.08),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 glow-neon mb-6">
            RESULTADOS REALES 🔥
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-4">
            Personas comunes. Cambios reales.
          </p>

          <p className="text-white font-semibold text-xl md:text-2xl">
            Esto pasa cuando seguís el sistema correcto
          </p>

        </div>
      </section>

      {/* 🔥 GALERÍA ANTES / DESPUÉS */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[1,2,3,4,5,6].map((item) => (
            <div
              key={item}
              className="
                bg-black/40 border border-white/10 rounded-xl overflow-hidden
                hover:scale-105 transition duration-300
                shadow-[0_0_20px_rgba(255,255,0,0.1)]
              "
            >
              <div className="h-72 bg-gray-800 flex items-center justify-center text-gray-500">
                FOTO ANTES / DESPUÉS
              </div>

              <div className="p-4 text-center">
                <p className="text-yellow-400 font-bold">-8KG en 6 semanas</p>
                <p className="text-gray-400 text-sm">Juan, 27 años</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 HISTORIAS (CLAVE PARA CONVERTIR) */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
            No cambiaron su cuerpo...
            <br /> cambiaron su mentalidad
          </h2>

          <div className="space-y-8">

            <div className="bg-gray-800/40 p-6 rounded-xl border border-white/10">
              <p className="text-gray-300 italic">
                “Arranqué sin motivación… hoy no puedo dejar de entrenar.”
              </p>
              <p className="text-yellow-400 font-bold mt-2">— Lucas, 31</p>
            </div>

            <div className="bg-gray-800/40 p-6 rounded-xl border border-white/10">
              <p className="text-gray-300 italic">
                “Probé todo… esto fue lo único que me funcionó.”
              </p>
              <p className="text-yellow-400 font-bold mt-2">— Martina, 24</p>
            </div>

          </div>

        </div>
      </section>

      {/* 🔥 TRANSICIÓN PRO (TU ESTILO) */}
      <section className="relative py-16 bg-gray-900 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">

          <div className="relative">

            <div className="w-full h-[3px] bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-[loadBar_4s_linear_infinite]" />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 animate-[sparkMove_4s_linear_infinite]">
              <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full shadow-[0_0_10px_rgba(255,255,0,0.9)]" />
            </div>

            <div className="absolute -top-5 w-full text-center">
              <span className="text-xs text-gray-500 tracking-widest">
                ACTIVANDO TU CAMBIO
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 🔥 CTA FINAL (LO MÁS IMPORTANTE) */}
      <section className="py-24 text-center bg-black">

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          El próximo resultado puede ser el tuyo
        </h2>

        <p className="text-gray-400 mb-8">
          Pero tenés que empezar hoy
        </p>

        <Link href="/programas">
          <button className="
            bg-yellow-400 text-black 
            font-bold px-8 py-4 rounded-xl 
            shadow-[0_0_20px_#facc15]
            hover:scale-105 
            hover:shadow-[0_0_35px_#facc15]
            transition text-lg
          ">
            ⚡ Quiero empezar ahora
          </button>
        </Link>

      </section>

    </div>
  );
}