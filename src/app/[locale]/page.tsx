// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default async function HomePage() {
  const t = await getTranslations('HomePage');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] -mt-24 flex items-center justify-center">
        <Image
          src="/images/background.png"
          alt={t('ImageAlt')}
          fill
          className="object-cover object-[0_0]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Precision Irrigation <br /> with AI & Satellite Data
          </h1>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-[#7d8b64] hover:bg-[#6c7a55] text-white text-lg px-6 py-3 rounded-full transition"
          >
            Request a Demo
          </Link>
        </div>

        {/* iPad Image overlapping into next section */}
        <div className="absolute bottom-[-100px] flex justify-center w-full">
          <Image
            src="/images/ipad.png"
            alt="Irrigation Map on iPad"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="pt-[140px] pb-16 px-6 md:px-16 bg-white">
        <h2 className="text-2xl font-bold mb-4">How it Works</h2>
        <p className="text-gray-700 max-w-4xl">
          KARL uses satellite data to generate precise irrigation recommendations, helping farmers optimize water use and boost crop yields.
          Seamlessly integrating with irrigation machinery and farm management platforms, KARL delivers efficient water management solutions
          tailored to each field’s needs.
        </p>
      </section>

      {/* Irrigation Mapping Box */}
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <h2 className="text-2xl font-bold mb-4">Irrigation Mapping</h2>

        <h3 className="text-xl font-semibold mb-2">
          Evapotranspiration (ET) Mapping
        </h3>
        <p className="text-gray-700 mb-6 max-w-4xl">
          KARL’s Irrigation Maps are derived in part by 20-meter resolution daily evapotranspiration (ET) data, offering insights tailored to
          the growing crop’s water requirements. This localized ET data also supports precise and efficient satellite-based irrigation
          management for any farmers using irrigation systems.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Localized Irrigation Mapping for Machinery
        </h3>
        <p className="text-gray-700 max-w-4xl">
          KARL’s irrigation maps are designed specifically for the irrigation machinery they are being used for. By taking in irrigation
          machine geometry, KARL offers localized water application maps enabling site- and machine-targeted irrigation, ensuring water reaches
          exactly where it’s needed.
        </p>
      </section>
    </div>
  );
}
