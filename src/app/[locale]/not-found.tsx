'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import '../globals.css'

export default function NotFound() {
  const t = useTranslations('NotFound')
  const [count, setCount] = useState(() => Math.floor(Math.random() * 50) + 1)

  return (
    <div
      className="
        font-pompiere
        relative
        min-h-screen flex flex-col items-center justify-start
        whitespace-pre-line text-[#814D24]
        bg-[#FFEEE1]
        p-4 pt-10 pb-16
      "
    >
      {/* Signpost icon */}
      <i className="bi bi-signpost-split text-[6rem] mb-4" />

      {/* Title */}
      <h1 className="text-5xl md:text-6xl leading-[1.3] text-center font-bold mb-2">
        {t('title')}
      </h1>

      {/* Description */}
      <p className="text-2xl md:text-2xl text-center mb-8">
        {t('description')}
      </p>

      {/* Three sections stacked on mobile, centered */}
      <div className="flex flex-col items-center w-full space-y-8 mb-12">
        <div className='flex flex-row items-center justify-between gap-10 p-5'>
          {/* Punish button */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-2xl text-center">{t('punish-text')}</p>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="
                px-4 py-2 text-xl
                border-2 border-[#814D24] rounded-full
                hover:bg-[#814D24] hover:text-[#FFEEE1]
                transition
              "
            >
              :(
            </button>
          </div>

          {/* Counter */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-2xl text-center">{t('punish-text-2')}</p>
            <span className="py-2 text-3xl font-bold">{count}</span>
          </div>
        </div>

        {/* Home link */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-4xl text-center">{t('home-text')}</p>
          <Link
            href="/"
            className="
              inline-flex items-center space-x-2
              px-6 py-3 text-2xl
              border-2 border-[#814D24] rounded-full
              hover:bg-[#814D24] hover:text-[#FFEEE1]
              transition
            "
          >
            <i className="bi bi-house-fill" />
            <span>{t('home')}</span>
          </Link>
        </div>
      </div>

      {/* Bottom‐corner icons (tools left, hammer right) */}
      <i className="bi bi-tools text-2xl text-[#814D24] absolute bottom-4 left-4" />
      <i className="bi bi-hammer text-2xl text-[#814D24] absolute bottom-4 right-4" />
    </div>
  )
}
