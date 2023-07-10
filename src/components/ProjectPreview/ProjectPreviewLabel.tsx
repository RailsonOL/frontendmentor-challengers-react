import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'

interface ProjectPreviewLabelProps {
  names: string[]
}

function IconValidate(name: string) {
  name = name.toLowerCase()

  const color = '#8be9fd'

  switch (name) {
    case 'js' || 'Javascript':
      return <BiLogoJavascript color={color} />
    case 'ts' || 'typescript':
      return <BiLogoTypescript color={color} />
    case 'react':
      return <BiLogoReact color={color} />
    case 'html':
      return <BiLogoHtml5 color={color} />
    case 'css':
      return <BiLogoCss3 color={color} />
    case 'tailwindcss' || 'tailwind':
      return <BiLogoTailwindCss color={color} />

    default:
      break
  }

  return ''
}

export default function ProjectPreviewLabel({
  names: Name,
}: ProjectPreviewLabelProps) {
  const parts = []

  for (const name of Name) {
    parts.push(
      <span
        className="flex items-center gap-1 rounded-md bg-slate-600 p-2"
        key={name}
      >
        {IconValidate(name)}
        <span className="text-xs text-cyan-300">{name}</span>
      </span>,
    )
  }

  return parts
}
