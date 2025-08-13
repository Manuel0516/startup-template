// components/LocaleSwitcher.tsx
'use client';

import 'bootstrap-icons/font/bootstrap-icons.css';
import {useLocale, useTranslations} from 'next-intl';
import Image                        from 'next/image';
import {useParams}                  from 'next/navigation';
import {useRouter, usePathname}     from '@/i18n/navigation';
import {routing}                    from '@/i18n/routing';
import {Locale}                     from 'next-intl';
import {useTransition, useState}    from 'react';

export default function LocaleSwitcher() {
  const t               = useTranslations('LocaleSwitcher');
  const locale          = useLocale();
  const router          = useRouter();
  const pathname        = usePathname();
  const params          = useParams();
  const [pending, start] = useTransition();
  const [open, setOpen]  = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggle = () => {
    setAnimating(true);
    setOpen(o => !o);
  };

  const switchTo = (next: Locale) => {
    setAnimating(true);
    setOpen(false);
    setTimeout(() => {
      start(() =>
        router.replace(
          // @ts-expect-error -- type mismatch: waiting on upstream types
          { pathname, params },
          { locale: next }
        )
      );
    }, 800);
  };

  const maskStyle = animating
    ? {
        WebkitMaskImage:
          'linear-gradient(to bottom, black 0%, black 100%, transparent 100%)',
        maskImage:
          'linear-gradient(to bottom, black 0%, black 100%, transparent 100%)',
      }
    : {};

  return (
    <div className="z-100 relative inline-block">
        {/* current flag */}
        <button
          aria-label={t('label')}
          className="
            m-auto
            p-1
            bg-[#FFFFFF]
            rounded-3xl
            flex items-center justify-center
            hover:bg-gray-300
          "
          onClick={toggle}
          disabled={pending}
        >
          <div className="relative w-7 h-7">
            <Image
              src={`/flags/${locale}.svg`}
              alt={locale}
              fill
              className="rounded-full object-cover"
            />
          </div>
        </button>


      {/* dropdown (always in DOM for smooth open/close) */}
      <ul
        style={maskStyle}
        onTransitionEnd={e => {
          if (e.propertyName === 'max-height') setAnimating(false);
        }}
        className={`
          ml-[1px]
          relative md:absolute right-0 top-full mt-2
          bg-[#FFF] shadow-lg rounded-3xl
          overflow-hidden md:translate-x-1
          transition-[max-height,opacity] duration-800 ease-out
          p-0 flex flex-col items-center space-y-2
          ${open
            ? 'max-h-[300px] opacity-100 pointer-events-auto'
            : 'max-h-0 opacity-0 pointer-events-none'
          }
        `}
      >
        {routing.locales.map(code => (
          <li key={code}>
            <button
              className="flex items-center justify-center px-2 py-2 hover:bg-gray-300 rounded-3xl"
              onClick={() => switchTo(code)}
            >
              <div className="relative w-7 h-7 p-0">
                <Image
                  src={`/flags/${code}.svg`}
                  alt={code}
                  fill
                  className="rounded-full object-cover p-0 border-2 border-gray-300"
                />
              </div>
              <span className="sr-only">
                {t('locale', { locale: code })}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
