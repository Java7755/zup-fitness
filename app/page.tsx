import Hero from './components/Hero'
import ComoFunciona from './components/ComoFunciona'
import Videos from './components/videos'
import Benefits from './components/Benefits'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">

      {/* HERO */}
      <Hero />

      {/* COMO FUNCIONA */}
      <ComoFunciona />

      {/* BENEFICIOS 🔥 */}
      <section className="
        py-20 px-6 md:px-0 
        bg-gradient-to-b from-black via-[#1a1a1a] to-black
      ">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
          Beneficios del programa
        </h2>

        <Benefits />
      </section>

      {/* ⚡ BLOQUE DE IMPACTO + PLANES */}
      <section className="relative py-24 px-6 md:px-0 bg-[#111111] overflow-hidden">

        {/* EFECTO ÓXIDO */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,0,0.15),transparent_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* COPY QUE VENDE */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm md:text-base">
              No es falta de motivación...
            </p>

            <p className="text-white text-xl md:text-2xl font-semibold">
              es falta de un sistema que funcione
            </p>
          </div>

          {/* URGENCIA */}
          <div className="text-center mb-10">
            <span className="text-yellow-400 text-lg font-bold animate-pulse">
              ⚠️ Últimos cupos disponibles esta semana
            </span>
          </div>

          {/* FUSE BAR PRO */}
          <div className="relative mb-16">

            <div className="w-full h-[4px] bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-[loadBar_3s_linear_infinite]" />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 animate-[sparkMove_3s_linear_infinite]">
              <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-[0_0_12px_rgba(255,255,0,0.9)]" />
            </div>

            <div className="absolute -top-6 w-full text-center">
              <span className="text-xs text-gray-500 tracking-widest">
                ACTIVANDO CAMBIO
              </span>
            </div>

          </div>

          {/* 💰 PLANES (AHORA MÁS ARRIBA) */}
          <Plans />

        </div>
      </section>

      {/* TRANSICIÓN HACIA PRUEBA SOCIAL */}
      <section className="relative py-16 bg-[#0f0f0f] overflow-hidden">
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
                ACTIVANDO RESULTADOS
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="
        py-20 px-6 md:px-0 
        bg-gradient-to-b from-black via-[#1a1a1a] to-black
      ">
        <Testimonials />
      </section>

      {/* 🎥 VIDEOS (AHORA ABAJO PARA CERRAR) */}
      <section className="py-20 px-6 md:px-0 bg-[#111111]">

        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Resultados reales en acción
          </h2>

          <p className="text-gray-400 mt-3">
            Esto no es teoría. Es lo que pasa cuando entrenás con sistema.
          </p>
        </div>

        <Videos />
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}