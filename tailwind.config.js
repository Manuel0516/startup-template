module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          background: 'var(--bg-main)',
          text: 'var(--text-main)',
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          opensans: ['Open Sans', 'sans-serif'],
        }
      },
    },
  };
  