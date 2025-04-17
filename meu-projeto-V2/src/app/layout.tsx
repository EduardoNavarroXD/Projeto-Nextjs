import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

// importa a fonte Lato
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Meu Projeto',
  description: 'Projeto Next.js com tela de login',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  )
}