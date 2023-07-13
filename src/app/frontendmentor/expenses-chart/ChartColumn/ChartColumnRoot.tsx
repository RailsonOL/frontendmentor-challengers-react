/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export function ChartColumnRoot({ children }: { children: React.ReactNode }) {
  const maxAmount = Math.max(
    ...React.Children.toArray(children).map((child: any) => child.props.amount),
  )

  return (
    <div className="flex h-40 w-full flex-grow items-end space-x-3 text-center text-xs sm:h-32 sm:space-x-4">
      {React.Children.map(children, (child: any) => {
        const size = (child.props.amount / maxAmount) * 100 // Calcula o tamanho proporcional
        return React.cloneElement(child, { size }) // Passa o tamanho como propriedade para cada filho
      })}
    </div>
  )
}
