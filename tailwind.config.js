/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary": "#052C29",
        "secondary": "#10433F",
        "accent": "#e1f51f",
        "neutral": "#c6c6c6",
        "base-100": "#77807b",
        "info": "#3ABFF8",
        "success": "#a1d2b4",
        "lightsuccess": "#EBF8F0",
        "warning": "#DFF4E7",
        "error": "#F87272",
        "lightgreen": "#C7E5D3",
        "darkgreen" : "#052C29",   
        'opaque-bg': 'rgba(223, 244, 231, 0.6)',
        "offyellow" : "#fbff1642",
        "secondarylt": "#10433fc7"
    },
    fontSize: {
      'title': ['clamp(30px,3vw,50px)', '100%'],
      'subtitle': ['clamp(18px,4vw,25px)', '110%'],
      'content': ['clamp(16px,1.5vw,35px)'],
    },
    fontFamily: {
      sans: [
          '"Interstate"',
          'sans-serif',
      ],
  },
  boxShadow: {
    'inner-lg' : 'inset 1px 1px 10px 2px rgba(0, 0, 0, 0.06);'
  }
    },
  },
  plugins: [],
}
