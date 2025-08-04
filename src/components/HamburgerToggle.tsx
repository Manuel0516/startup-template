// components/HamburgerToggle.tsx
'use client';

import { motion } from 'framer-motion';

export default function HamburgerToggle({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  // shared spring for the two morphing bars
  const spring = { type: 'spring', stiffness: 350, damping: 13 };

  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className="w-8 h-8 p-1 focus:outline-none"
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        {/* top bar morphs into X */}
        <motion.path
          fill="transparent"
          stroke="#f5f1e8"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 3 6 L 21 6',  opacity: 1 },
            open:   { d: 'M 4 4 L 20 20', opacity: 0.6 },
          }}
          transition={spring}
        />

        {/* middle bar: instantly hide on open, fade in on close */}
        <motion.path
          fill="transparent"
          stroke="#f5f1e8"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed: {
              d: 'M 3 12 L 21 12',
              opacity: 1,
              transition: { duration: 0.2 },
            },
            open: {
              d: 'M 3 12 L 21 12',
              opacity: 0,
              transition: { duration: 0 },
            },
          }}
        />

        {/* bottom bar morphs into X */}
        <motion.path
          fill="transparent"
          stroke="#f5f1e8"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 3 18 L 21 18', opacity: 1 },
            open:   { d: 'M 4 20 L 20 4',  opacity: 0.6 },
          }}
          transition={spring}
        />
      </motion.svg>
    </button>
  );
}
