import Image from 'next/image'
import Header from '../Header'

export default function Destination() {
  return (
    <div className="container-destination flex min-h-screen flex-col md:gap-10">
      <Header currentPage={2} />
      <main className="flex items-center gap-16 p-6 text-center max-lg:flex-col md:gap-44 lg:mb-36 lg:mt-auto lg:px-40">
        <div className="flex max-w-[27.75rem] flex-col gap-4 text-center lg:text-left">
          <h5>
            <span className="mr-2 text-white/50">01</span> Pick your destination
          </h5>

          <picture>
            <Image
              src="/assets/destination/image-moon.png"
              alt="Moon"
              width={445}
              height={445}
            />
          </picture>
        </div>

        <div className="flex w-[27.8rem] flex-col gap-10 text-left lg:ml-auto lg:self-end">
          <ul className="flex h-[2.125rem] gap-5 font-['Barlow_Condensed'] uppercase text-white">
            <li className="h-full border-b-2 border-b-white tracking-[0.16rem]">
              Moon
            </li>
            <li className="tracking-[0.16rem] text-indigo-200">Mars</li>
            <li className="tracking-[0.16rem] text-indigo-200">Europa</li>
            <li className="tracking-[0.16rem] text-indigo-200">Titan</li>
          </ul>

          <div>
            <h2>Moon</h2>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>

          <div className="flex border-t-[1px] border-white/25 pt-10">
            <div className="flex flex-col gap-2">
              <span className="text-[0.875rem] uppercase tracking-[0.14763rem] text-['Barlow_Condensed']">
                Avg. distance
              </span>
              <span className="font-['Bellefair'] text-[1.75rem] uppercase text-white">
                384,400 km
              </span>
            </div>

            <div className="ml-auto flex flex-col gap-2">
              <span className="text-[0.875rem] uppercase tracking-[0.14763rem] text-['Barlow_Condensed']">
                Est. travel time
              </span>
              <span className="font-['Bellefair'] text-[1.75rem] uppercase text-white">
                3 days
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
