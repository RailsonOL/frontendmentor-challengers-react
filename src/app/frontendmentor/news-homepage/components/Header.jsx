'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="col-span-2">
      <div className="flex">
        <Image src="/news-homepage-assets/images/logo.svg" alt="Logo" />
        <nav className="ml-auto flex gap-8">
          <button
            onClick={handleClick}
            className="absolute right-5 top-10 z-10 sm:hidden"
          >
            <Image
              src={
                isOpen
                  ? '/news-homepage-assets/images/icon-menu-close.svg'
                  : '/news-homepage-assets/images/icon-menu.svg'
              }
              alt="hambuger icon"
            />
          </button>

          <div
            className={`${
              isOpen ? '' : 'hidden'
            } absolute right-0 top-0 flex h-full w-full flex-col items-end bg-black bg-opacity-40 sm:static sm:flex sm:bg-transparent`}
          >
            <div
              className={
                isOpen
                  ? 'flex h-full w-2/3 flex-col gap-8 bg-[--clr-neutral-offwhite] p-10 pt-40'
                  : 'flex gap-10'
              }
            >
              <a
                href="#home"
                className="text-lg text-[--clr-neutral-darkgrayishblue]"
              >
                Home
              </a>
              <a
                href="#new"
                className="text-lg text-[--clr-neutral-darkgrayishblue]"
              >
                New
              </a>
              <a
                href="#popular"
                className="text-lg text-[--clr-neutral-darkgrayishblue]"
              >
                Popular
              </a>
              <a
                href="#trending"
                className="text-lg text-[--clr-neutral-darkgrayishblue]"
              >
                Trending
              </a>
              <a
                href="#categories"
                className="text-lg text-[--clr-neutral-darkgrayishblue]"
              >
                Categories
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
