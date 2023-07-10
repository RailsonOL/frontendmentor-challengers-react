import ProjecPreviewLabel from './ProjectPreviewLabel'

interface ProjectPreviewProps {
  title: string
  link: string
  category: string
  tecnologys: string[]
}

export default function ProjectPreview({
  title,
  link,
  category,
  tecnologys,
}: ProjectPreviewProps) {
  return (
    <article className="rounded-3xl bg-slate-800 p-4 text-center shadow-xl">
      <section className="font font-bold text-pink-400">
        <a href={link} className="text-xl hover:text-orange-300">
          {title}
        </a>
      </section>

      <span className="text-xs text-zinc-400">{category}</span>

      <div className="flex flex-wrap justify-center gap-2 p-5">
        <ProjecPreviewLabel names={tecnologys} />
      </div>
    </article>
  )
}
