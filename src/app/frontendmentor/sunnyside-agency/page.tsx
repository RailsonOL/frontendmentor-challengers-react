/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import {
  ArrowDown,
  Facebook,
  Hamburger,
  Instagram,
  Logo,
  Pinterest,
  Twitter,
} from './SunnysideIcons'
import './style.css'

export default function SunnysideAgency() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="text-center">
      <header
        className="relative flex h-screen w-full flex-col gap-20 bg-cover bg-center p-10 text-white max-sm:p-4 max-sm:py-8"
        style={{
          backgroundImage: 'url(/sunny-side-images/desktop/image-header.jpg)',
        }}
      >
        <nav className="flex">
          <Logo className="h-fit w-fit self-center" />

          <div
            className="ml-auto cursor-pointer fill-white sm:hidden"
            onClick={handleClick}
          >
            <Hamburger />
          </div>

          {/* <div className="ml-auto flex items-center gap-10"> */}
          <div
            className={`${
              isOpen ? '' : 'hidden'
            } absolute right-4 top-32 z-10 ml-auto sm:static  sm:flex sm:bg-transparent`}
          >
            <div className="relative sm:hidden">
              <div className="absolute -top-8 right-0">
                <div className="mx-auto h-0 w-0 border-b-[40px] border-l-[40px] border-solid border-b-white border-l-transparent border-r-transparent"></div>
              </div>
            </div>
            <div className="grid items-center justify-center gap-10 bg-white px-[6.6rem] py-10 text-white max-sm:text-[--very-dark-desaturated-blue] sm:grid-flow-col sm:bg-transparent sm:p-0">
              <div className="cursor-pointer">About</div>
              <div className="cursor-pointer">Services</div>
              <div className="cursor-pointer">Projects</div>
              <div className="cursor-pointer rounded-[2rem] bg-[--yellow] p-4 px-6 font-[Fraunces] text-base font-bold uppercase text-[--very-dark-desaturated-blue] hover:bg-opacity-50 hover:text-white sm:bg-white">
                Contact
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-20 place-self-center">
          <h1 className="font-[Fraunces] text-6xl font-black uppercase tracking-widest max-sm:text-4xl">
            We are creatives
          </h1>

          <ArrowDown className="mx-auto mt-24 animate-bounce" />
        </div>
      </header>

      <main className="flex flex-col">
        <section className="flex max-sm:flex-col">
          <picture className="max-sm:order-0 order-1 basis-1/2">
            <source
              media="(max-width: 640px)"
              srcSet="/sunny-side-images/mobile/image-transform.jpg"
            />
            <img
              src="/sunny-side-images/desktop/image-transform.jpg"
              className="h-full w-full"
              alt="Egg"
            />
          </picture>
          <article className="my-auto basis-1/2 p-24 text-left max-sm:order-1 max-sm:p-4 max-sm:text-center lg:pl-44">
            <h2 className="font-[Fraunces] text-[2.6rem] font-bold">
              Transform your brand
            </h2>
            <p className="my-10 text-[--dark-grayish-blue]">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a
              href="#"
              className="group relative font-[Fraunces] font-bold uppercase"
            >
              <span className="duration-350 absolute bottom-0 left-0 -z-10 h-2 w-full rounded-full bg-yellow-400 bg-opacity-30 transition group-hover:bg-opacity-100"></span>
              Learn more
            </a>
          </article>
        </section>

        <section className="flex max-sm:flex-col">
          <picture className="basis-1/2">
            <source
              media="(max-width: 640px)"
              srcSet="/sunny-side-images/mobile/image-stand-out.jpg"
            />
            <img
              src="/sunny-side-images/desktop/image-stand-out.jpg"
              className="h-full w-full"
              alt="Cup"
            />
          </picture>
          <article className="my-auto basis-1/2 p-24 text-left max-sm:order-1 max-sm:p-4 max-sm:text-center lg:pr-44">
            <h2 className="font-[Fraunces] text-[2.6rem] font-bold">
              Stand out to the right audience
            </h2>
            <p className="my-10 text-[--dark-grayish-blue]">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we&apos;ll build
              and extend your brand in digital places.
            </p>
            <a
              href="#"
              className="group relative font-[Fraunces] font-bold uppercase"
            >
              <span className="duration-350 absolute bottom-0 left-0 -z-10 h-2 w-full rounded-full bg-red-300 bg-opacity-50 transition group-hover:bg-opacity-100"></span>
              Learn more
            </a>
          </article>
        </section>

        <section className="flex max-sm:flex-col">
          <article className="relative basis-1/2">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/sunny-side-images/mobile/image-graphic-design.jpg"
              />
              <img
                src="/sunny-side-images/desktop/image-graphic-design.jpg"
                className="h-full w-full"
                alt="Cherry"
              />
            </picture>
            <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-sm">
              <h3 className="font-[Fraunces] text-2xl text-[--dark-desaturated-cyan]">
                Graphic design
              </h3>
              <p className="text-[--dark-desaturated-cyan]">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential
                clients&apos; attention.
              </p>
            </div>
          </article>
          <article className="relative basis-1/2">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/sunny-side-images/mobile/image-photography.jpg"
              />
              <img
                src="/sunny-side-images/desktop/image-photography.jpg"
                className="h-full w-full"
                alt="Orange"
              />
            </picture>
            <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-sm">
              <h3 className="font-[Fraunces] text-2xl text-[--dark-blue]">
                Photography
              </h3>
              <p className="text-[--dark-blue]">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </article>
        </section>
      </main>

      <section className="my-40">
        <h2 className="mb-20 font-[Fraunces] text-lg uppercase tracking-[0.3em] text-[--grayish-blue]">
          Client testimonials
        </h2>
        <div className="flex items-center justify-center gap-6 max-sm:flex-col">
          <figure className="mb-10 max-w-[22rem] space-y-16 max-sm:space-y-5">
            <img
              src="/sunny-side-images/image-emily.jpg"
              className="mx-auto w-1/4 rounded-full"
              alt="Emily R."
            />
            <blockquote className="text-[--very-dark-grayish-blue]">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </blockquote>
            <figcaption className="flex flex-col gap-2 text-sm font-normal text-[--grayish-blue]">
              <span className="font-[Fraunces] text-lg font-bold text-[--very-dark-desaturated-blue]">
                Emily R.
              </span>
              Marketing Director
            </figcaption>
          </figure>
          <figure className="mb-10 max-w-[22rem] space-y-16 max-sm:space-y-5">
            <img
              src="/sunny-side-images/image-thomas.jpg"
              className="mx-auto w-1/4 rounded-full"
              alt="Thomas S. Chief"
            />
            <blockquote className="text-[--very-dark-grayish-blue]">
              Sunnyside&apos;s enthusiasm coupled with their keen interest in
              our brand&apos;s success made it a satisfying and enjoyable
              experience.
            </blockquote>
            <figcaption className="flex flex-col gap-2 text-sm font-normal text-[--grayish-blue]">
              <span className="font-[Fraunces] text-lg font-bold text-[--very-dark-desaturated-blue]">
                Thomas S.
              </span>
              Chief Operating Officer
            </figcaption>
          </figure>
          <figure className="mb-10 max-w-[22rem] space-y-16 max-sm:space-y-5">
            <img
              src="/sunny-side-images/image-jennie.jpg"
              className="mx-auto w-1/4 rounded-full"
              alt="Jennie F."
            />
            <blockquote className="text-[--very-dark-grayish-blue]">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </blockquote>
            <figcaption className="flex flex-col gap-2 text-sm font-normal text-[--grayish-blue]">
              <span className="font-[Fraunces] text-lg font-bold text-[--very-dark-desaturated-blue]">
                Jennie F.
              </span>
              Business Owner
            </figcaption>
          </figure>
        </div>
      </section>

      <footer>
        <div className="grid max-sm:grid-cols-2 sm:grid-flow-col">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/sunny-side-images/mobile/image-gallery-milkbottles.jpg"
            />
            <img
              src="/sunny-side-images/desktop/image-gallery-milkbottles.jpg"
              alt="milkbottles"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/sunny-side-images/mobile/image-gallery-orange.jpg"
            />
            <img
              src="/sunny-side-images/desktop/image-gallery-orange.jpg"
              alt="orange"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/sunny-side-images/mobile/image-gallery-cone.jpg"
            />
            <img
              src="/sunny-side-images/desktop/image-gallery-cone.jpg"
              alt="cone"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="/sunny-side-images/mobile/image-gallery-sugar-cubes.jpg"
            />
            <img
              src="/sunny-side-images/desktop/image-gallery-sugarcubes.jpg"
              alt="sugar cubes"
            />
          </picture>
        </div>

        <div className="bg-[#78C5B5] py-14  text-[--dark-moderate-cyan]">
          <Logo
            className="mx-auto h-fit w-fit self-center"
            fill="hsl(198, 62%, 26%)"
          />
          <div className="mt-8 flex items-center justify-center gap-14 text-lg">
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Services
            </a>
            <a href="#" className="hover:text-white">
              Projects
            </a>
          </div>
          <div className="mt-16 flex items-center justify-center gap-6">
            <Facebook className="cursor-pointer fill-[--dark-desaturated-cyan] hover:fill-white" />
            <Instagram className="cursor-pointer fill-[--dark-desaturated-cyan] hover:fill-white" />
            <Twitter className="cursor-pointer fill-[--dark-desaturated-cyan] hover:fill-white" />
            <Pinterest className="cursor-pointer fill-[--dark-desaturated-cyan] hover:fill-white" />
          </div>
        </div>
      </footer>
    </div>
  )
}
