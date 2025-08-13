// components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="text-white">
      {/* Top section: logo and links */}
      <div className="bg-[#305031]/95 w-full flex items-center justify-between px-2 md:px-4 py-1">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <Image
            src="/logo.png"
            alt={t('altLogo')}
            width={100}
            height={25}
            className="rounded-xl max-sm:w-15"
          />
        </div>

        {/* Footer navigation links */}
        <nav className="flex justify-evenly gap-1 sm:gap-2 text-xs items-center">
          <Link href="/terms" className="max-sm:flex-1 text-center hover:underline hover:text-gray-200">
            {t('terms')}
          </Link>
          <Link href="/terms#privacy" className="max-sm:flex-1 text-center hover:underline hover:text-gray-200">
            {t('privacy')}
          </Link>
          <Link href="/contact" className="max-sm:flex-1 text-center hover:underline hover:text-gray-200">
            {t('contact')}
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="max-sm:flex-1 text-center hover:underline hover:text-gray-200"
          >
            {t('linkedin')}
          </Link>
        </nav>
      </div>

      {/* Bottom section: copyright */}
      <div className="bg-white">
        <div className="bg-background/80 w-full mx-auto px-6 md:px-16 py-1 text-center text-[0.65rem]">
          © {new Date().getFullYear()} {t('rights')}
        </div>
      </div>
    </footer>
  );
}
