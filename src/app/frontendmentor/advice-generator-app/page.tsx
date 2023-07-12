'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import './style.css'

interface Advice {
  slip: {
    id: number
    advice: string
  }
}

export default function AdviceGenerator() {
  const [data, setData] = useState<Advice | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchAdvice()
  }, [])

  const fetchAdvice = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  const handleButtonClick = () => {
    fetchAdvice()
  }

  return (
    <main className="grid min-h-screen items-center justify-center">
      <div className="relative mx-4 flex flex-col items-center justify-center gap-6 rounded-xl bg-[--dark-grayish-blue] px-12 py-10">
        <h1 className="text-xs uppercase tracking-[0.3em] text-[--neon-green]">
          Advice #{data?.slip.id}
        </h1>
        <p className="max-w-xs text-center text-xl font-semibold">
          {data?.slip.advice}
        </p>

        <Image
          src="/advice-generator-app-assets/images/pattern-divider-mobile.svg"
          className="mb-4"
          alt="divider"
          width={295}
          height={16}
        />

        <button
          className={`${
            (isLoading ? 'animate-ping ' : '') +
            ' absolute -bottom-10 rounded-full bg-[--neon-green] p-5 hover:shadow-[var(--neon-green)_0px_0px_30px_0px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
          }`}
          onClick={handleButtonClick}
        >
          <Image
            src="/advice-generator-app-assets/images/icon-dice.svg"
            alt="Dice"
            width={24}
            height={24}
          />
        </button>
      </div>
    </main>
  )
}
