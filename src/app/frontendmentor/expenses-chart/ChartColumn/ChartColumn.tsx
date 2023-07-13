interface ChartColumnProps {
  amount: number
  name: string
  size?: number
}

export function ChartColumn({ amount, name, size }: ChartColumnProps) {
  size = Math.floor(size || 0)

  return (
    <div className="group relative flex flex-grow flex-col items-center pb-5">
      <span className="absolute top-0 -mt-10 hidden rounded-[0.25rem] bg-[--dark-brown] p-2 text-xs font-bold text-[--very-pale-orange] group-hover:block">
        ${amount}
      </span>
      <div
        className="relative flex w-full justify-center rounded-[0.25rem] bg-[--soft-red] hover:opacity-80"
        style={{
          height: (size / 100) * 8 + 'rem',
          background: size === 100 ? 'hsl(186, 34%, 60%)' : '',
        }}
      ></div>
      <span className="absolute bottom-0 text-xs">{name}</span>
    </div>
  )
}
