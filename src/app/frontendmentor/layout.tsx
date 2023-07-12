import RootLayout from '../layout'
import Attribuition from './attribuition'

export default function FMLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      {children}
      <Attribuition />
    </RootLayout>
  )
}
