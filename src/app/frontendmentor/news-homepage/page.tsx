import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-center">
      <div className="m-5 flex max-w-7xl flex-col gap-20 max-sm:gap-5">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}
