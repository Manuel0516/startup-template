// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { Link }             from '@/i18n/navigation';
import Image                 from 'next/image';

export default async function Contact() {
  const t = await getTranslations('HomePage');

  return (
    <div className='text-white' 
    >
    Hola
    </div>
  );
}
