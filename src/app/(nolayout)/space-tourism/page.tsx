import Header from './Header'

export default function Home() {
  return (
    <div className="grid min-h-screen">
      <Header />
      <main className="flex p-6 text-center max-lg:flex-col">
        <div>
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>

          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div>
          <button className="group relative h-[9.375rem] w-[9.375rem] rounded-full bg-white font-['Bellefair'] text-[1.25rem] uppercase text-gray-950 sm:h-[17.125rem] sm:w-[17.125rem] sm:text-[2rem]">
            <a href="#">Explore</a>
            <div className="absolute left-0 right-0 top-0 -z-10 h-[9.375rem] w-[9.375rem] rounded-full bg-white/50 duration-100 group-hover:scale-150 sm:h-[17.125rem] sm:w-[17.125rem]"></div>
          </button>
        </div>
      </main>
    </div>
  )
}
