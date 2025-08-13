// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default async function HomePage() {
  const t = await getTranslations('HomePage');

  return (
    <div className="w-full">
      {/* --- HERO + IPAD OVERLAP --- */}
      <div className="relative pb-5 w-full h-auto flex justify-center">
        {/* background */}
        <Image
          src="/images/background.png"
          alt={t('imageAlt')}
          fill
          className="object-cover z-0 opacity-80"
          priority
        />
        {/* content overlay */}
        <div className="font-poppins relative z-10 flex flex-row items-center px-6 py-8 gap-2">
          {/* left: hero text + button (2/3 width) */}
          <div className="w-55/100 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-start items-center">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white leading-tight whitespace-pre-line">
                {t('heroLine')}
              </h1>
              <Link
                href="/contact"
                className="mt-6 self-start text-center bg-[#2C4C32] hover:bg-[#2C4C32]/70 hover:backdrop-blur-lg hover:text-gray-200 text-white md:text-lg text-sm px-3 py-2 rounded-lg transition"
              >
                {t('requestDemo')}
              </Link>
            </div>
          </div>
          {/* right: ipad image (1/3 width) */}
          <div className="flex w-45/100 justify-center">
            <div className="relative">
              <Image
                src="/images/ipad.png"
                alt={t('ipadAlt')}
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative -mt-8 bg-white rounded-t-lg">
        {/* --- HOW IT WORKS --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Text (2/3 width) */}
          <div className="w-full md:w-58/100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('howItWorksTitle')}
            </h2>
            <p className="font-opensans text-gray-800 text-justify text-sm md:text-base leading-relaxed">
              {t('howItWorksDesc')}
            </p>
          </div>

          {/* Icons (1/3 width) */}
          <div className="lg:mt-8 w-full md:w-42/100 flex justify-between items-center gap-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/water.png"
                alt={t('optimizedWaterAlt')}
                width={35}
                height={35}
              />
              <p className="text-gray-800 mt-2 text-center text-sm font-medium">
                {t('optimizedWater')}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/images/wheat.png"
                alt={t('increasedYieldAlt')}
                width={35}
                height={35}
              />
              <p className="text-gray-800 mt-2 text-center text-sm">
                {t('increasedYield')}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/soil.png"
                alt={t('improvedSoilAlt')}
                width={35}
                height={35}
              />
              <p className="text-gray-800 mt-2 text-center text-sm">
                {t('improvedSoil')}
              </p>
            </div>
          </div>
        </section>

        {/* --- IRRIGATION MAPPING DETAILS --- */}
        <section
          id="features"
          className="scroll-mt-18 max-w-7xl pt-0 mx-auto px-6 md:px-16 py-8 flex flex-col md:flex-row items-start gap-8"
        >
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">
              {t('irrigationMappingTitle')}
            </h2>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t('etMappingTitle')}
              </h3>
              <p className="font-opensans text-gray-800 mb-6 text-justify">
                {t('etMappingDesc')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t('localizedMappingTitle')}
              </h3>
              <p className="font-opensans text-gray-800 text-justify">
                {t('localizedMappingDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* --- SUPPORTED TYPES OF IRRIGATION --- */}
        <section className="max-w-7xl pt-0 mx-auto px-6 md:px-16 py-8 flex flex-col items-start gap-2">
          <h2 className="w-full text-2xl font-bold mb-4">
            {t('supportedTypesTitle')}
          </h2>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            {['hoseReel','linear','pivot'].map((key) => (
              <div key={key} className="bg-background/95 p-3 text-white rounded-2xl text-center">
                <h3 className="mb-3 underline decoration-2 underline-offset-3">
                  {t(`${key}Title`)}
                </h3>
                <Image
                  src="/images/generic.png"
                  alt={t(`${key}Alt`)}
                  width={250}
                  height={250}
                  className="max-sm:h-55 max-sm:w-55"
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- FUNDED & SUPPORTED --- */}
        <section className="pb-10 max-w-7xl pt-0 mx-auto px-6 md:px-16 py-8 flex flex-col items-start gap-2">
          <h2 className="w-full text-2xl font-bold mb-4">
            {t('fundedByTitle')}
          </h2>
          <div className='w-full flex flex-col justify-between items-center sm:flex-row gap-4'>
            {['fundator1','fundator2','fundator3'].map((key) => (
              <Image
                key={key}
                src="/logo.png"
                alt={t(`${key}Alt`)}
                width={350}
                height={60}
                className='max-w-50'
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}