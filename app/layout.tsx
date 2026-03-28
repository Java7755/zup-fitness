import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'ZUP Fitness',
  description: 'Transforma tu cuerpo y tu vida con ZUP Fitness',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 font-sans">{children}</body>
    </html>
  )
}
