import Link from 'next/link'
import Header from './Header'

export default function Home() {
  return (
    <div className="container-home flex min-h-screen flex-col md:gap-10">
      <Header currentPage={1} />
      <main className="flex items-center gap-16 p-6 text-center max-lg:flex-col md:gap-44 lg:mb-36 lg:mt-auto lg:px-40">
        <div className="max-w-[27.75rem] text-center lg:text-left">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>

          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="lg:ml-auto lg:self-end">
          <button className="group relative h-[9.375rem] w-[9.375rem] rounded-full bg-white font-['Bellefair'] text-[1.25rem] uppercase text-gray-950 sm:h-[17.125rem] sm:w-[17.125rem] sm:text-[2rem]">
            <Link href="/space-tourism/destination">Explore</Link>
            <div className="absolute left-0 right-0 top-0 -z-10 h-[9.375rem] w-[9.375rem] rounded-full bg-white/50 duration-100 group-hover:scale-150 sm:h-[17.125rem] sm:w-[17.125rem]"></div>
          </button>
        </div>
      </main>
    </div>
  )
}
