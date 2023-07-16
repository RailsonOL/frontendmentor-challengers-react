import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'Studing Frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
