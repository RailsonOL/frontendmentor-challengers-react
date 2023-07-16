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
    <header className="flex items-start items-center justify-between max-sm:h-1/2 max-sm:px-6 max-sm:py-10">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/assets/shared/logo.svg"
          width={48}
          height={48}
        />
        <img src="/assets/shared/logo.svg" alt="Logo" width={40} height={40} />
      </picture>

      <nav className="ml-auto flex gap-8 font-['Barlow_Condensed'] uppercase text-white">
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
          } absolute right-0 top-0 z-20 flex flex-col bg-white/5 backdrop-blur-lg max-sm:h-screen max-sm:w-2/3 max-sm:px-10 max-sm:py-32 sm:static sm:flex`}
        >
          <ul className="gap-10 max-sm:space-y-6 sm:flex">
            <li>
              <a href="#">
                <span className="mr-1 font-bold">00</span> Home
              </a>
            </li>
            <li>
              <a href="#">
                <span className="mr-1 font-bold">01</span> Destination
              </a>
            </li>
            <li>
              <a href="#">
                <span className="mr-1 font-bold">02</span> Crew
              </a>
            </li>
            <li>
              <a href="#">
                <span className="mr-1 font-bold">03</span> Technology
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
