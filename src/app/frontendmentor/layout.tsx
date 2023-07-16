import Attribuition from './Attribuition'

export default function FMLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative grid min-h-screen content-center justify-center">
        {children}
        <Attribuition />
      </div>
    </>
  )
}
