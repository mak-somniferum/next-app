const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      mobileTablet: { max: '1279px' },
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      slate: '#f7f8fa',
      primary: {
        light: '#e32c3f',
        DEFAULT: '#df072e',
      },
      dark: {
        light: '#26282f',
        DEFAULT: '#13151b',
      },
      gray: {
        100: '#fafafa',
        200: '#f4f4f4',
        300: '#ebebeb',
        400: '#e0e0e0',
        500: '#c8c8c8',
        600: '#888',
        700: '#555',
        800: '#20222d',
      },
    },
    fontSize: {
      inherit: 'inherit',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '48px',
      '6xl': '64px',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    letterSpacing: {
      tight: '-0.2px',
      normal: '0',
    },
    borderRadius: {
      none: 0,
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '20px',
      full: '9999px',
    },
    boxShadow: {
      none: 'none',
      DEFAULT: '0 6px 9px 0 rgba(0, 0, 0, 0.08)',
    },
    extend: {
      minWidth: px0_2000,
      maxWidth: px0_2000,
      minHeight: px0_2000,
      spacing: {
        ...px0_2000,
        sm: '16px',
        md: '40px',
      },
    },
  },
};
