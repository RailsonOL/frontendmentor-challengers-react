import Link from 'next/link'

export default function Attribution() {
  return (
    <footer className="attribution absolute sticky bottom-0 left-0 right-0 space-x-2">
      Challenge by
      <Link href={'https://www.frontendmentor.io?ref=challenge'}>
        Frontend Mentor
      </Link>
      . Coded by
      <Link href={'https://github.com/RailsonOL?tab=repositories'}>
        Zerohora (RailsonOL)
      </Link>
    </footer>
  )
}
