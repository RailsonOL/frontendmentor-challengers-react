import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid min-h-screen place-items-center justify-center p-4">
      <div className="bd-[--clr-primary-darkdesaturatedblue] overflow-hidden rounded-xl sm:grid sm:grid-flow-col">
        <div className="order-last bg-[--clr-primary-softviolet] sm:max-w-lg">
          <picture>
            <source
              srcSet="/stats-preview-card-images/image-header-desktop.jpg"
              media="(min-width: 600px)"
            />
            <Image
              src="/stats-preview-card-images/image-header-mobile.jpg"
              alt="Header mobile"
              className="opacity-30"
              width={654}
              height={480}
            />
          </picture>
        </div>

        <article className="max-w-lg space-y-4 bg-[--clr-primary-darkdesaturatedblue] p-7 text-center sm:space-y-10 sm:p-16 sm:pr-20 sm:text-left">
          <h1 className="text-3xl font-bold">
            Get{' '}
            <span className="text-[--clr-primary-softviolet]">insights</span>{' '}
            that help your business grow.
          </h1>

          <p className="text-base text-white/75 ">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <div className="grid gap-6 uppercase text-white/60 sm:grid-flow-col">
            <div>
              <span className="flex flex-col text-2xl font-bold normal-case text-white">
                10k+
              </span>
              <span className="font-['Lexend_Deca'] uppercase">companies</span>
            </div>
            <div>
              <span className="flex flex-col text-2xl font-bold text-white">
                314
              </span>
              <span className="font-['Lexend_Deca'] uppercase">templates</span>
            </div>
            <div>
              <span className="flex flex-col text-2xl font-bold text-white">
                12m+
              </span>
              <span className="font-['Lexend_Deca'] uppercase">queries</span>
            </div>
          </div>
        </article>
      </div>

      <div className="attribution absolute bottom-0 left-0 right-0">
        Challenge by
        <Link href={'https://www.frontendmentor.io?ref=challenge'}>
          Frontend Mentor
        </Link>
        . Coded by
        <Link href={'https://github.com/RailsonOL?tab=repositories'}>
          Zerohora (RailsonOL)
        </Link>
      </div>
    </div>
  )
}
