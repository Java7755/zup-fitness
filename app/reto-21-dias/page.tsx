'use client'

import React, { useState, useEffect } from 'react'

type FormData = {
  nombre: string
  email: string
  whatsapp: string
}

export default function Reto21Dias() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    email: '',
    whatsapp: '',
  })

  const [timeLeft, setTimeLeft] = useState<number>(900)
  const [spotsLeft] = useState<number>(7)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const progress = ((900 - timeLeft) / 900) * 100

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxJP-xWnu3eP4oG5xhlsQkxsu-mBe_FKj8vjvbX9M10gioopsC_DXbDx4osKECVlGi6mw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          fecha: new Date().toISOString(),
        }),
      })
    } catch (error) {
      console.error(error)
    }

    const message = `Hola! Quiero entrar al Reto 21 días antes de que se termine el cupo ⏳

Mi nombre es ${form.nombre}.

👉 ¿Cómo aseguro mi lugar?`

    window.open(`https://wa.me/5491161883321?text=${encodeURIComponent(message)}`, '_blank')

    setForm({ nombre: '', email: '', whatsapp: '' })
    setLoading(false)
  }

  return (
    <div className="bg-black text-white scroll-smooth">

      {/* HERO */}
      <section className="py-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transformá tu cuerpo en{" "}
          <span className="text-yellow-400">21 días</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Sistema simple. Resultados reales. Sin vueltas.
        </p>
      </section>

      {/* 🎟️ TICKET CTA */}
      <section className="flex justify-center py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">

        <a href="#formulario" className="w-full max-w-xl group cursor-pointer">

          <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-2xl opacity-70 group-hover:opacity-100 transition-all duration-500" />

          <div className="relative bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-black rounded-2xl p-6 overflow-hidden shadow-[0_10px_40px_rgba(255,215,0,0.4)] transition-all duration-500 group-hover:scale-[1.04]">

            <div className="absolute inset-0 border-2 border-yellow-500/40 rounded-2xl" />

            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full" />

            <div className="text-center mb-4">
              <span className="text-xs font-bold tracking-widest text-black/70">
                🎟️ CUPÓN EXCLUSIVO
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-3">
              ÚLTIMOS {spotsLeft} CUPOS
            </h2>

            <p className="text-center text-black/70 mb-6">
              Este acceso puede desaparecer en minutos
            </p>

            <div className="border-t border-dashed border-black/30 my-6" />

            <div className="relative w-full h-6 bg-black/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black">
                ⚡ {Math.floor(progress)}%
              </div>
            </div>

            <p className="mt-3 text-sm text-center text-black/70">
              ⏳ {formatTime(timeLeft)} restantes
            </p>

            <div className="mt-6 text-center">
              <span className="inline-block bg-black text-yellow-400 font-bold px-6 py-2 rounded-full text-sm group-hover:scale-110 transition">
                ACTIVAR ACCESO AHORA →
              </span>
            </div>

          </div>

        </a>

      </section>

      {/* FORM */}
      <section id="formulario" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-md mx-auto bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-white/10">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Sumate al reto
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              value={form.nombre}
              onChange={handleChange}
              className="p-3 rounded bg-black border border-white/10 focus:border-yellow-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Tu email"
              required
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded bg-black border border-white/10 focus:border-yellow-400 outline-none"
            />

            <input
              type="text"
              name="whatsapp"
              placeholder="Tu WhatsApp"
              required
              value={form.whatsapp}
              onChange={handleChange}
              className="p-3 rounded bg-black border border-white/10 focus:border-yellow-400 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 text-black font-bold py-3 rounded-xl hover:scale-105 transition"
            >
              {loading ? 'Enviando...' : 'Quiero empezar'}
            </button>

          </form>
        </div>
      </section>

    </div>
  )
}