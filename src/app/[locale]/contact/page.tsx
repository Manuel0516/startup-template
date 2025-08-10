import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage() {
  const t = await getTranslations('ContactPage');

  return (
    <div className="w-full">
      {/* Background */}
      <div className="relative w-full min-h-[88vh] flex items-center justify-center ">
        <Image
          src="/images/background.png"
          alt={t('bgAlt')}
          fill
          priority
          className="object-cover opacity-80"
        />

        {/* Content wrapper */}
        <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info card */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[250px] md:max-w-[300px] h-auto rounded-2xl bg-[#2C4C32]/90 text-white p-5 shadow-lg backdrop-blur-sm text-center flex flex-col items-center justify-center">
              <h2 className="text-xl md:text-2xl font-bold mb-5">{t('getInTouch')}</h2>

              <div className="space-y-5 text-sm md:text-base leading-relaxed">
                <div>
                  <div className="font-semibold">Company SAS</div>
                  <div>Random street 50, 22. th, 1462</div>
                  <div>Malmö, Sweden</div>
                </div>

                <div>
                  <a href="tel:" className="hover:underline">
                    +46 XXXXXXXXXX
                  </a>
                  <br />
                  <a href="mailto:" className="hover:underline">
                    contact@random.com
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-[#2C4C32] hover:bg-white transition"
                    aria-label="LinkedIn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zm7.98 0h3.83v1.98h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.09V23h-3.99v-6.44c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.68-2.48 3.41V23H8.48V8.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-2xl bg-[#2C4C32]/90 text-white p-6 md:p-8 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
              {t('contactUs')}
            </h2>
            <ContactForm
              labels={{
                firstName: t('firstName'),
                lastName: t('lastName'),
                email: t('email'),
                message: t('message'),
                send: t('send'),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}