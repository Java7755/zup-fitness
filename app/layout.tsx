import './globals.css'
import Header from './components/Header'

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
      <body className="bg-black text-white">

        {/* Header global */}
        <Header />

        {/* Contenido principal */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}