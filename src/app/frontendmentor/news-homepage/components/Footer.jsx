export default function Footer() {
  return (
    <footer className="col-span-2  grid gap-10 lg:grid-flow-col">
      <article className="grid max-w-fit grid-flow-col gap-4">
        <img
          src="/news-homepage-assets/images/image-retro-pcs.jpg"
          alt="Retro PCs"
          className="max-w-[6rem]"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-[--clr-neutral-grayishblue]">01</h2>
          <a href="#">
            <h3> Reviving Retro PCs</h3>
          </a>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </article>
      <article className="grid max-w-fit grid-flow-col gap-4">
        <img
          src="/news-homepage-assets/images/image-top-laptops.jpg"
          alt="Retro PCs"
          className="max-w-[6rem]"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-[--clr-neutral-grayishblue]">02</h2>
          <a href="#">
            <h3> Top 10 Laptops of 2022</h3>
          </a>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </article>
      <article className="grid max-w-fit grid-flow-col gap-4">
        <img
          src="/news-homepage-assets/images/image-gaming-growth.jpg"
          alt="Retro PCs"
          className="max-w-[6rem]"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-[--clr-neutral-grayishblue]">03</h2>
          <a href="#">
            <h3> The Growth of Gaming</h3>
          </a>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </article>
    </footer>
  )
}
