export default function Main() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <main className="flex max-w-[51rem] flex-col gap-8 self-center">
        <picture>
          <source
            srcSet="/news-homepage-assets/images/image-web-3-mobile.jpg"
            media="(max-width: 768px)"
          />
          <img
            src="/news-homepage-assets/images/image-web-3-desktop.jpg"
            alt="Web Desktop"
          />
        </picture>
        <article className="grid gap-12 lg:grid-flow-col">
          <h1>The Bright Future of Web 3.0?</h1>
          <div>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="mt-10 bg-[--clr-primary-softred] px-10 py-3 uppercase tracking-widest text-[--clr-neutral-offwhite] hover:bg-[--clr-neutral-verydarkblue]">
              Read more
            </button>
          </div>
        </article>
      </main>
      <aside className="flex flex-col gap-6 bg-[--clr-neutral-verydarkblue] p-6">
        <h2 className="text-[--clr-primary-softorange]">New</h2>
        <div className="grid h-full min-h-[22rem] divide-y divide-[--clr-neutral-darkgrayishblue] text-[--clr-neutral-offwhite]">
          <article className="grid content-center space-y-3">
            <a href="#">
              <h3>Hydrogen VS Electric Cars</h3>
            </a>
            <p className="text-[--clr-neutral-grayishblue]">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </article>
          <article className="grid content-center space-y-3">
            <a href="#">
              <h3>The Downsides of AI Artistry</h3>
            </a>
            <p className="text-[--clr-neutral-grayishblue]">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <article className="grid content-center space-y-3">
            <a href="#">
              <h3>Is VC Funding Drying Up?</h3>
            </a>
            <p className="text-[--clr-neutral-grayishblue]">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </div>
      </aside>
    </div>
  )
}
