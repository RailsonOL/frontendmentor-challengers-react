import './style.css'

export default function ThreeColumPage() {
  return (
    <main className="p-6">
      <div className="my-16 flex overflow-hidden rounded-lg max-sm:flex-col">
        <article className="max-w-[18.6rem] space-y-8 bg-[--bright-orange] p-10">
          <picture>
            <img src="/3-column-images/icon-sedans.svg" alt="Icon Sedans" />
          </picture>
          <h1 className="text-4xl font-bold uppercase">Sedans</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>

          <div>
            <button className="rounded-full border-2 border-white bg-white px-6 py-3 text-[--bright-orange] hover:bg-transparent hover:text-white sm:mt-10">
              Learn More
            </button>
          </div>
        </article>

        <article className="max-w-[18.6rem] space-y-8 bg-[--dark-cyan] p-10">
          <picture>
            <img src="/3-column-images/icon-suvs.svg" alt="Icon SUVs" />
          </picture>
          <h1 className="text-4xl font-bold uppercase">SUVs</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <div>
            <button className="rounded-full border-2 border-white bg-white px-6 py-3 text-[--dark-cyan] hover:bg-transparent hover:text-white sm:mt-10">
              Learn More
            </button>
          </div>
        </article>

        <article className="max-w-[18.6rem] space-y-8 bg-[--very-dark-cyan] p-10">
          <picture>
            <img src="/3-column-images/icon-luxury.svg" alt="Icon Luxury" />
          </picture>
          <h1 className="text-4xl font-bold uppercase">Luxury</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <div>
            <button className="rounded-full border-2 border-white bg-white px-6 py-3 text-[--very-dark-cyan] hover:bg-transparent hover:text-white sm:mt-10">
              Learn More
            </button>
          </div>
        </article>
      </div>
    </main>
  )
}
