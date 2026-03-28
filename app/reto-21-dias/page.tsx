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

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${min}:${sec.toString().padStart(2, '0')}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxJP-xWnu3eP4oG5xhlsQkxsu-mBe_FKj8vjvbX9M10gioopsC_DXbDx4osKECVlGi6mw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          fecha: new Date().toISOString(),
        }),
      })
    } catch (error) {
      console.error('Error guardando lead', error)
    }

    const message = `Hola! Quiero entrar al Reto 21 días antes de que se termine el cupo ⏳

Mi nombre es ${form.nombre}.

Estoy decidido a cambiar mi cuerpo y no quiero quedarme afuera.

👉 ¿Cómo hago para asegurar mi lugar ahora?`

    const url = `https://wa.me/5491161883321?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')

    setForm({
      nombre: '',
      email: '',
      whatsapp: '',
    })

    setLoading(false)
  }

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transformá tu cuerpo en 21 días
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Sin dietas extremas. Sin rutinas imposibles. Un sistema real que podés mantener.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">🔥 Resultados visibles</h3>
          <p className="text-gray-400">Sentí el cambio en tu cuerpo en pocas semanas</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">📈 Progreso guiado</h3>
          <p className="text-gray-400">No más improvisar. Seguís un plan claro</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">💪 Disciplina real</h3>
          <p className="text-gray-400">Creás hábitos que duran más que el reto</p>
        </div>
      </section>

      {/* URGENCIA 🔥 */}
      <section className="text-center py-10">
        <p className="text-red-500 font-bold text-lg mb-2">
          ⚠️ Últimos {spotsLeft} cupos disponibles
        </p>

        <p className="text-white text-2xl font-bold">
          ⏳ Esta oferta termina en: {formatTime(timeLeft)}
        </p>

        <p className="text-gray-400 mt-2">
          Después vuelve a precio normal o se cierran inscripciones
        </p>
      </section>

      {/* FORMULARIO */}
      <section id="form" className="py-20 px-4">
        <div className="max-w-md mx-auto bg-white text-black p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
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
              className="p-3 rounded border"
            />

            <input
              type="email"
              name="email"
              placeholder="Tu email"
              required
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded border"
            />

            <input
              type="text"
              name="whatsapp"
              placeholder="Tu WhatsApp"
              required
              value={form.whatsapp}
              onChange={handleChange}
              className="p-3 rounded border"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Quiero empezar'}
            </button>
          </form>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Tu cambio empieza hoy
        </h2>
        <p className="text-gray-400 mb-6">
          Podés seguir igual… o empezar ahora.
        </p>
        <a
          href="#form"
          className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-bold transition"
        >
          Unirme al reto
        </a>
      </section>

    </div>
  )
}