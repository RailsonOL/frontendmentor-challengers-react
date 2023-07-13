import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor Challengers React',
  description: 'Studing Frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          ' grid min-h-screen min-h-screen content-center justify-center'
        }
      >
        {children}
      </body>
    </html>
  )
}
