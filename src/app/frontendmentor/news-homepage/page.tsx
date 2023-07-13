import type { Metadata } from 'next'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './style.css'

export const metadata: Metadata = {
  title: 'Frontend Mentor | News homepage - React',
  description:
    'This is a great small challenge to help get you used to building to a design.',
}

export default function Home() {
  return (
    <>
      <div className="m-5 flex max-w-7xl flex-col  gap-10 max-sm:gap-5">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}
