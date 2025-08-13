import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-static'; // legal pages rarely change

export default async function TermsPage() {
  const t = await getTranslations('TermsPage');
  const lastUpdated = '2025-08-13';

  return (
    <div className="w-full bg-white">
        {/* content card */}
        <main className="relative z-10 w-full px-6 md:px-10 py-6">
          <article className="rounded-2xl text-gray-900 p-6 md:p-10">
            <header className="mb-6 text-center">
              <h1 className="text-2xl md:text-3xl font-bold">{t('title')}</h1>
              <p className="text-sm opacity-90 mt-1">{t('lastUpdated', { date: lastUpdated })}</p>
            </header>

            <div className='w-full flex flex-col md:flex-row gap-12 justify-center '>
              {/* TOC */}
              <nav className="md:w-1/5 text-sm m-auto md:m-1 mb-6 space-y-3">
                {[
                  'definitions','services','accounts','apiUse','payments',
                  'ip','acceptableUse','privacy','disclaimers','liability','law','contact'
                ].map((k) => (
                  <a key={k} href={`#${k}`} className="block underline decoration-2 underline-offset-2 hover:text-gray-300">
                    {t(`${k}.h`)}
                  </a>
                ))}
              </nav>

              <div className='md:w-4/5'>
                <section id="definitions" className="space-y-3">
                  <h2 className="text-xl font-semibold">{t('definitions.h')}</h2>
                  <p className="text-justify leading-relaxed">{t('definitions.p1')}</p>
                </section>

                <section id="services" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('services.h')}</h2>
                  <p className="text-justify leading-relaxed">{t('services.p1')}</p>
                  <ul className="text-justify list-disc pl-6 space-y-1 leading-relaxed">
                    <li>{t('services.l1')}</li>
                    <li>{t('services.l2')}</li>
                    <li>{t('services.l3')}</li>
                  </ul>
                </section>

                <section id="accounts" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('accounts.h')}</h2>
                  <p className="text-justify leading-relaxed">{t('accounts.p1')}</p>
                </section>

                <section id="apiUse" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('apiUse.h')}</h2>
                  <ul className="text-justify list-disc pl-6 space-y-1 leading-relaxed">
                    <li>{t('apiUse.l1')}</li>
                    <li>{t('apiUse.l2')}</li>
                    <li>{t('apiUse.l3')}</li>
                  </ul>
                </section>

                <section id="payments" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('payments.h')}</h2>
                  <p className="text-justify leading-relaxed">{t('payments.p1')}</p>
                </section>

                <section id="ip" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('ip.h')}</h2>
                  <p className="text-justify leading-relaxed">{t('ip.p1')}</p>
                </section>

                <section id="acceptableUse" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('acceptableUse.h')}</h2>
                  <ul className="text-justify list-disc pl-6 space-y-1 leading-relaxed">
                    <li>{t('acceptableUse.l1')}</li>
                    <li>{t('acceptableUse.l2')}</li>
                    <li>{t('acceptableUse.l3')}</li>
                    <li>{t('acceptableUse.l4')}</li>
                  </ul>
                </section>

                <section id="privacy" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('privacy.h')}</h2>
                  <p className="text-justify leading-relaxed">{t('privacy.p1')}</p>
                </section>

                <section id="disclaimers" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('disclaimers.h')}</h2>
                  <p className="text-justify leading-relaxed">{t('disclaimers.p1')}</p>
                </section>

                <section id="liability" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('liability.h')}</h2>
                  <p className="text-justify leading-relaxed">{t('liability.p1')}</p>
                </section>

                <section id="law" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('law.h')}</h2>
                  <p className="text-justify leading-relaxed">{t('law.p1')}</p>
                </section>

                <section id="contact" className="space-y-3 mt-6">
                  <h2 className="text-xl font-semibold">{t('contact.h')}</h2>
                  <p className="text-justify leading-relaxed">
                    {t('contact.p1')}
                    {' '}
                    <a href="mailto:contact@karl.farm" className="underline decoration-2 underline-offset-2">
                      contact@info.com
                    </a>
                  </p>
                  <p className="opacity-90 text-sm">
                    Adress
                  </p>
                </section>
              </div>
            </div>
          </article>
        </main>
    </div>
  );
}