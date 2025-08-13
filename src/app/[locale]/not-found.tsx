'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const [count, setCount] = useState(() => Math.floor(Math.random() * 50) + 1);

  return (
    <div className="relative min-h-[calc(100dvh-120px)] w-full">
      {/* background */}
      <Image
        src="/images/background.png"
        alt=""
        fill
        priority
        className="object-cover opacity-80"
      />

      {/* content */}
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-10 md:py-16">
        {/* card */}
        <section className="rounded-2xl bg-[#2C4C32]/90 text-white shadow-lg backdrop-blur-sm p-6 md:p-10">
          {/* icon + title */}
          <div className="flex flex-col items-center text-center">
            <i className="bi bi-signpost-split text-[4rem] md:text-[5rem] mb-2 opacity-90" />
            <h1 className="font-poppins text-3xl md:text-4xl font-bold leading-tight mb-2">
              {t('title')}
            </h1>
            <p className="font-opensans text-base md:text-lg opacity-95 mb-6">
              {t('description')}
            </p>
          </div>

          {/* actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {/* punish */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-base md:text-lg text-center">{t('punish-text')}</p>
              <button
                type="button"
                aria-label="Punish button"
                onClick={() => setCount((c) => c + 1)}
                className="rounded-full border-2 border-white/90 px-5 py-2 text-white hover:bg-white/90 hover:text-[#2C4C32] transition"
              >
                :(
              </button>
            </div>

            {/* counter */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-base md:text-lg text-center">{t('punish-text-2')}</p>
              <span className="text-3xl md:text-4xl font-bold tabular-nums">{count}</span>
            </div>

            {/* home */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg md:text-xl text-center">{t('home-text')}</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/90 px-6 py-2 text-lg hover:bg-white/90 hover:text-[#2C4C32] transition"
              >
                <i className="bi bi-house-fill" />
                <span>{t('home')}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}