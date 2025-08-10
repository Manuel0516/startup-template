// components/CodeBlock.tsx
'use client';
import { useState } from 'react';

type Props = {
  code: string;
  language?: string;
  title?: string;
  className?: string;          // outer container
  contentClassName?: string;   // applies to <pre> (scroll/height here)
};

export default function CodeBlock({
  code,
  language = 'bash',
  title,
  className,
  contentClassName
}: Props) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <div className={`w-full rounded-lg overflow-hidden border border-[#30363d] bg-[#0d1117] text-[#c9d1d9] shadow-lg font-mono text-sm ${className || ''}`}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#30363d] bg-[#0d1117]">
        <span className="text-xs uppercase tracking-wide text-[#8b949e]">{title ?? language}</span>
        <button
          onClick={onCopy}
          className="text-xs px-2 py-1 rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] active:bg-[#484f58] transition"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Apply scroll + height HERE */}
      <pre className={`overflow-auto p-3 leading-relaxed ${contentClassName || ''}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}