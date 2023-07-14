import Link from 'next/link'

export default function Attribution() {
  return (
    <footer className="attribution">
      Challenge by{' '}
      <Link href={'https://www.frontendmentor.io?ref=challenge'}>
        Frontend Mentor
      </Link>
      . Coded by{' '}
      <Link href={'https://github.com/RailsonOL?tab=repositories'}>
        Zerohora (RailsonOL)
      </Link>
    </footer>
  )
}
