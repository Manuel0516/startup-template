// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { Link }             from '@/i18n/navigation';
import Image                 from 'next/image';

export default async function HomePage() {
  const t = await getTranslations('HomePage');

  return (
    <div
      className="relative w-full"
      style={{ height: 'calc(100vh - 6rem)' }}  
    >
      {/* Background + overlay */}
      <Image
        src="/images/background.jpg"
        alt={t('ImageAlt')}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Border + content wrapper */}
      <div className="
      absolute 
      inset-6 sm:inset-6 md:inset-12 lg:inset-16
      rounded-2xl overflow-hidden
      
      ">
        <div
          className="
            relative h-full w-full 
            border-3 border-[#FFEFDF] rounded-2xl 
            flex flex-col justify-between
          "
        >
          {/* 1) Top spacer */}
          <div className="lg:flex-1 md:h-50 sm:h-40" />


          {/* 2) Middle: title & subtitle */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl sd:text-5xl md:text-7xl lg:text-9xl font-pompiere text-[#FFEFDF]">
              {t('title')}
            </h1>
            <p className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-3xl lg:text-5xl text-[#FFEFDF]">
              {t('subtitle')}
            </p>
          </div>

          {/* 3) Bottom: buttons */}
          <div className="flex-0 mb-30 md:mb-0 sm:flex-1 flex justify-center px-4">
            <div
              className="
                flex w-full
                flex-col sm:flex-row    /* stack on mobile, row on sm+ */
                items-center justify-center 
                gap-6 sm:gap-10         /* a bit tighter on mobile */
              "
            >
              {/* First button */}
              <div
                className="
                  text-3xl  md:text-5xl  
                  flex-1 w-full 
                  flex items-center justify-center sm:justify-end
                "
              >
                <Link
                  href="/stay"
                  className="
                    sm:mr-5               /* only margin on larger screens */
                    flex items-center space-x-2 px-6 py-3
                    border-2 border-[#FFEFDF] rounded-full 
                    text-[#FFEFDF]  
                    hover:bg-[#FFEFDF] hover:text-[#7d8b64] 
                    transition
                  "
                >
                  <i className="bi bi-house-fill" />
                  <span>{t('buttonStay')}</span>
                </Link>
              </div>

              {/* Second button */}
              <div
                className="
                  text-3xl  md:text-5xl  
                  flex-1 w-full 
                  flex items-center justify-center sm:justify-start
                "
              >
                <Link
                  href="/services"
                  className="
                    flex items-center space-x-2 px-6 py-3 
                    border-2 border-[#FFEFDF] rounded-full 
                    text-[#FFEFDF]  
                    hover:bg-[#FFEFDF] hover:text-[#7d8b64] 
                    transition
                  "
                >
                  <i className="bi bi-yin-yang" />
                  <span>{t('buttonServices')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
