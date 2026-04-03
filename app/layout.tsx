// app/layout.tsx
import './globals.css'
import Header from './components/Header'
import FloatingIcons from './components/FloatingIcons' // 👈 IMPORTANTE

export const metadata = {
  title: 'ZUP Fitness',
  description: 'Transforma tu cuerpo y tu disciplina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className="
        text-white
        bg-gray-900
        [background-image:
          linear-gradient(120deg,#2c2c2c,#3b3b3b,#2c2c2c),
          repeating-linear-gradient(45deg, rgba(139,69,19,0.5) 0px, rgba(139,69,19,0.5) 4px, transparent 4px, transparent 8px)
        ]
        [background-size: auto, 40px 40px]
        [background-blend-mode: overlay]
      "
      >

        {/* Header global */}
        <Header />

        {/* Contenido principal */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>

        {/* ICONOS FLOTANTES 🔥 */}
        <FloatingIcons />

      </body>
    </html>
  )
}