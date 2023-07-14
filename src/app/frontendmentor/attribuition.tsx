import Link from 'next/link'

export default function Attribution() {
  return (
    <footer className="attribution absolute bottom-0 left-0 right-0 bg-slate-800 p-1 text-center text-xs text-gray-500">
      Challenge by{' '}
      <Link
        href={'https://www.frontendmentor.io?ref=challenge'}
        className="text-white underline decoration-sky-500 hover:decoration-2"
      >
        Frontend Mentor
      </Link>
      . Coded by{' '}
      <Link
        href={'https://github.com/RailsonOL?tab=repositories'}
        className="text-white underline decoration-sky-500 hover:decoration-2"
      >
        Zerohora (RailsonOL)
      </Link>
    </footer>
  )
}
