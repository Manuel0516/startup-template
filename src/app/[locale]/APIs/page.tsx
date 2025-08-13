import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import CodeBlock from '@/components/CodeBlock';

export default async function APIsPage() {
  const t = await getTranslations('APIsPage');

  const curlExample = `curl -X POST \\
    'https://api.example.com/data/process' \\
    -H 'Accept: application/json' \\
    -H 'Content-Type: application/json' \\
    -d '{
      "type": "SampleData",
      "items": [
        {
          "id": 123,
          "name": "Example Item",
          "properties": {
            "created_at": "2025-01-15T10:30:00Z"
          }
        }
      ]
    }'`;

  return (
    <div className="w-full">
      <div className="relative min-h-[calc(100dvh-120px)] bg-white">
        {/* --- HOW TO INTEGRATE --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row gap-8">
          {/* Text */}
          <div className="w-full md:w-7/12 flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{t('howToIntegrateTitle')}</h1>
            <p className="font-opensans text-gray-800 text-justify text-sm md:text-base leading-relaxed">
              {t('howToIntegrateDesc')}
            </p>
          </div>

          {/* Code block (same size as image below) */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="w-full max-w-[820px]"> {/* control size */}
              <CodeBlock
                title="API Example"
                language="bash"
                code={curlExample}
                className="text-xs md:text-sm"
                contentClassName="max-h-56 md:max-h-85"  // scroll height
              />
            </div>
          </div>
        </section>

        {/* --- RAINDANCER --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 pb-14 flex flex-col md:flex-row gap-8">
          {/* Text */}
          <div className="w-full md:w-7/12 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/logo.png" alt={t('raindancerAlt')} width={120} height={40} />
              <h2 className="text-xl md:text-2xl font-bold">{t('raindancerTitle')}</h2>
            </div>
            <p className="font-opensans text-gray-800 text-justify text-sm md:text-base leading-relaxed whitespace-pre-line">
              {t('raindancerDesc')}
            </p>
          </div>

          {/* Image (same size as code block above) */}
          <div className="w-full md:w-5/12 flex justify-center items-center">
            <div className="w-full max-w-[820px]"> {/* same constraint */}
              <Image
                src="/images/background.png"
                alt={t('raindancerScreenshotAlt')}
                width={520}
                height={552}               // ~16:9 to match code box feel
                className="rounded-lg w-full max-h-85"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}