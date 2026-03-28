import Hero from './components/Hero'           // ⚠ Hero tiene 'use client'
import Benefits from './components/Benefits'   // server component
import Plans from './components/Plans'         // server component
import Testimonials from './components/Testimonials' // ⚠ si animás con motion, 'use client'
import Footer from './components/Footer'       // server component

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Plans />
      <Testimonials />
      <Footer />
    </>
  )
}