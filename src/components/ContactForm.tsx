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

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  website?: string; // optional honeypot
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
    const fd = new FormData(form);

    const data: ContactPayload = {
      firstName: String(fd.get('firstName') ?? ''),
      lastName: String(fd.get('lastName') ?? ''),
      email: String(fd.get('email') ?? ''),
      message: String(fd.get('message') ?? ''),
      website: fd.get('website') ? String(fd.get('website')) : undefined, // if you add a hidden honeypot input
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Try to read server response (may contain {error})
      const json = (await res
        .clone()
        .json()
        .catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!res.ok) {
        throw new Error(json?.error || 'Failed');
      }

      setOk('Message sent!');
      form.reset();
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    'w-full rounded-md bg-white text-[#1f2b22] placeholder-[#6b7280] px-3 py-2 outline-none focus:ring-2 focus:ring-white/70';

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Optional honeypot to reduce spam:
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm opacity-90" htmlFor="firstName">
            {labels.firstName}
          </label>
          <input id="firstName" name="firstName" required className={inputBase} />
        </div>
        <div>
          <label className="text-sm opacity-90" htmlFor="lastName">
            {labels.lastName}
          </label>
          <input id="lastName" name="lastName" required className={inputBase} />
        </div>
      </div>

      <div>
        <label className="text-sm opacity-90" htmlFor="email">
          {labels.email}
        </label>
        <input id="email" type="email" name="email" required className={inputBase} />
      </div>

      <div>
        <label className="text-sm opacity-90" htmlFor="message">
          {labels.message}
        </label>
        <textarea id="message" name="message" rows={5} required className={`${inputBase} resize-none`} />
      </div>

      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
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