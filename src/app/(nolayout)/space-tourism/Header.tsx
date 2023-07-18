/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import './style.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="flex items-start items-center justify-between max-sm:h-1/2 max-sm:px-6 max-sm:py-6 md:h-[96px] lg:relative lg:mt-8">
      <div className="absolute right-[57%] z-30 hidden w-[33%] border-b-[1px] border-white/25 lg:inline"></div>
      <picture className="md:ml-6">
        <source
          media="(min-width: 768px)"
          srcSet="/assets/shared/logo.svg"
          width={48}
          height={48}
        />
        <img src="/assets/shared/logo.svg" alt="Logo" width={40} height={40} />
      </picture>

      <nav className="ml-auto flex gap-8 font-['Barlow_Condensed'] uppercase text-white md:h-full md:w-[60%]">
        <button onClick={handleClick} className="z-30 sm:hidden">
          <img
            src={
              isOpen
                ? '/assets/shared/icon-close.svg'
                : '/assets/shared/icon-hamburger.svg'
            }
            alt="hambuger icon"
          />
        </button>

        <div
          className={`${
            isOpen ? '' : 'hidden'
          } absolute right-0 top-0 z-20 flex flex-col bg-white/5 tracking-[0.15rem] backdrop-blur-lg max-sm:h-screen max-sm:w-2/3 max-sm:px-10 max-sm:py-32 sm:static sm:flex md:w-full md:justify-center`}
        >
          <ul className="h-full items-center justify-center gap-10 max-sm:space-y-6 sm:flex lg:pr-32">
            <li className="flex flex-col border-b-2 border-b-white hover:border-b-white/50 md:h-full md:items-center md:justify-center md:hover:border-b-2">
              <a href="#">
                <span className="mr-1 font-bold md:hidden lg:inline">00</span>
                Home
              </a>
            </li>
            <li className="flex flex-col hover:border-b-white/50 md:h-full md:items-center md:justify-center md:hover:border-b-2">
              <a href="#">
                <span className="mr-1 font-bold md:hidden lg:inline">01</span>{' '}
                Destination
              </a>
            </li>
            <li className="flex flex-col hover:border-b-white/50 md:h-full md:items-center md:justify-center md:hover:border-b-2">
              <a href="#">
                <span className="mr-1 font-bold md:hidden lg:inline">02</span>{' '}
                Crew
              </a>
            </li>
            <li className="flex flex-col hover:border-b-white/50 md:h-full md:items-center md:justify-center md:hover:border-b-2">
              <a href="#">
                <span className="mr-1 font-bold md:hidden lg:inline">03</span>{' '}
                Technology
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
