// components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { useTranslations } from 'next-intl';
import {useState, useMemo } from 'react';
import {usePathname} from 'next/navigation';
import HamburgerToggle from './HamburgerToggle';

// Navigation items factory (labels depend on translation)
export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Memoize nav items so labels update when t changes
  const NAV_ITEMS = useMemo(
    () => [
      { label: t('home'), href: '/' },
      { label: t('features'), href: '/#features' },
      { label: t('apis'), href: '/APIs' },
      { label: t('contact'), href: '/contact' },
    ],
    [t]
  );

  const cleanPath = pathname.replace(/^\/[a-z]{2}/, '') || '/';
  const isActive = (href: string) => {
    if (href === '/') return cleanPath === '/';
    return cleanPath === href;
  };
  

  // Determine the "current" label based on pathname (without locale and hash)
  const currentLabel = useMemo(() => {
    const normalizedPath = cleanPath.toLowerCase().split('#')[0]; // remove hash
    const match = NAV_ITEMS.find((item) => {
      const itemPath = item.href.toLowerCase().split('#')[0];
      return normalizedPath === itemPath;
    });
    return match?.label ?? t('home');
  }, [NAV_ITEMS, cleanPath, t]);

  return (
    <header
      className={`font-poppins sticky inset-x-0 top-0 left-0 w-full z-50 bg-background/90 text-[#fff] flex flex-col overflow-visible`}
    >
      {/* --- MOBILE HEADER --- */}
      <div className="backdrop-blur-sm w-full px-5 py-3 shadow-md md:hidden relative flex items-center justify-between">
        {/* Logo */}
        <div className='flex flex-1'>
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="/logo.png"
              alt="Logotype"
              width={90}
              height={30}
              className="rounded"
            />
          </Link>
        </div>

        {/* current page title */}
        <div className='flex-1 flex justify-center'>
          <div className="text-xl font-medium">{currentLabel}</div>
        </div>

        {/* hamburger */}
        <div className='flex flex-1 justify-end'>
          <HamburgerToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          />
        </div>
      </div>

        {/* MOBILE SLIDE-DOWN MENU */}
      <nav
          className={`
            w-full 
            absolute top-full left-0 w-full
            bg-background/90 backdrop-blur-sm
            rounded-b-xl
            z-50
            flex flex-col items-center space-y-6 py-4
            text-l
            overflow-hidden
            transition-[max-height,opacity] duration-700 ease-out
            ${
              mobileOpen
                ? 'max-h-[800px] opacity-100 pointer-events-auto'
                : 'max-h-0 opacity-0 pointer-events-none'
            }
          `}
        >
          <div
            className={`
              flex flex-col items-center space-y-5 py-2 text-xl
              transform transition-all duration-300 ease-out
              ${
                mobileOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
              }
            `}
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-gray-300 hover:underline decoration-2 underline-offset-3 transition
                  ${isActive(href) ? 'underline' : ''}
                  `}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <LocaleSwitcher />
            </div>
          </div>
      </nav>

      {/* --- DESKTOP HEADER (md+) --- */}
      <div className="hidden md:flex items-center justify-between w-full px-9 py-3 backdrop-blur-sm shadow-md">
          {/* Logo */}
          <Link href="/" className="ml-2 flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logotype"
              width={120}
              height={50}
              className="rounded"
            />
          </Link>

          {/* Nav links */}
          <div className="flex-1 flex justify-end mr-5">
            <nav className=" flex space-x-6 text-l text-white">
              {NAV_ITEMS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`hover:text-gray-300 hover:underline decoration-2 underline-offset-3 transition
                    ${isActive(href) ? 'underline' : ''}
                  `}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

        {/* Language Switcher */}
        <div className="flex items-center">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}