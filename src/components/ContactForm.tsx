// components/ContactForm.tsx
'use client';

import { useState } from 'react';

type Labels = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  send: string;
};

export default function ContactForm({ labels }: { labels: Labels }) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setOk('Message sent!');
      form.reset();
    } catch {
      setErr('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    'w-full rounded-md bg-white text-[#1f2b22] placeholder-[#6b7280] px-3 py-2 outline-none focus:ring-2 focus:ring-white/70';
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm opacity-90">{labels.firstName}</label>
          <input name="firstName" required className={inputBase} />
        </div>
        <div>
          <label className="text-sm opacity-90">{labels.lastName}</label>
          <input name="lastName" required className={inputBase} />
        </div>
      </div>

      <div>
        <label className="text-sm opacity-90">{labels.email}</label>
        <input type="email" name="email" required className={inputBase} />
      </div>

      <div>
        <label className="text-sm opacity-90">{labels.message}</label>
        <textarea name="message" rows={5} required className={`${inputBase} resize-none`} />
      </div>

      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-white/90 text-[#2C4C32] px-5 py-2 font-medium hover:bg-white transition disabled:opacity-70"
        >
          {loading ? '...' : labels.send}
        </button>
      </div>

      {ok && <p className="text-green-200 text-sm max-sm:text-center">{ok}</p>}
      {err && <p className="text-red-200 text-sm max-sm:text-center">{err}</p>}
    </form>
  );
}