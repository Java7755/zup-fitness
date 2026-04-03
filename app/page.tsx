import Hero from './components/Hero'
import ComoFunciona from './components/ComoFunciona' // 👈 NUEVO
import Videos from './components/videos'
import Benefits from './components/Benefits'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-fitnessBlack text-white min-h-screen font-sans">
      
      {/* Hero */}
      <Hero />

      {/* COMO FUNCIONA 👇 */}
      <ComoFunciona />

      {/* Video Profesional */}
      <Videos />

      {/* TRANSICIÓN PRO ENTRE PLANES Y TESTIMONIOS */}
      <section className="relative py-16 bg-gray-900 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">

          {/* FUSE BAR */}
          <div className="relative">

            {/* BASE */}
            <div className="w-full h-[3px] bg-gray-700 rounded-full overflow-hidden">

              {/* CARGA */}
              <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-[loadBar_4s_linear_infinite]" />

            </div>

            {/* CHISPA */}
            <div className="absolute top-1/2 -translate-y-1/2 animate-[sparkMove_4s_linear_infinite]">
              <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full shadow-[0_0_10px_rgba(255,255,0,0.9)]" />
            </div>

            {/* TEXTO */}
            <div className="absolute -top-5 w-full text-center">
              <span className="text-xs text-gray-500 tracking-widest">
                ACTIVANDO BENEFICIOS
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-3xl md:text-4xl font-bold text-neonYellow glow-neon text-center mb-12">
          Beneficios del programa
        </h2>
        <Benefits />
      </section>

      <section className="relative py-20 px-6 md:px-0 bg-gray-900 overflow-hidden">

        {/* EFECTO DE FONDO SUTIL */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,0,0.06),transparent_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* MENSAJE DE IMPACTO */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm md:text-base">
              No es falta de motivación...
            </p>

            <p className="text-white text-lg md:text-xl font-semibold">
              es falta de un sistema que funcione
            </p>
          </div>

          {/* URGENCIA 🔥 */}
          <div className="text-center mb-8">
            <span className="text-yellow-400 text-lg font-bold animate-pulse">
              ⚠️ Últimos cupos disponibles esta semana
            </span>
          </div>

          {/* FUSE BAR PRO */}
          <div className="relative mb-14">

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

          {/* PLANES */}
          <Plans />

          {/* TRANSICIÓN PRO */}
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
                    ACTIVANDO RESULTADOS
                  </span>
                </div>

              </div>

            </div>
          </section>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <Testimonials />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}