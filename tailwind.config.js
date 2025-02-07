/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode
  content: ["./src/**/*.{,html,htm,js,jsx,ts,tsx}",'./public/index.html',],
  theme: {
    screens: {
      sm: '640px',
      md: '950px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        anton: ['Anton', 'serif'],
        playwrite: ['"Playwrite AU VIC Guides"', 'serif'],
        ysabeau: ['"Ysabeau SC"', 'serif'],
      },
      fontWeight: {
        custom100: 100,
        custom400: 400,
        custom900: 900,
      },
      animation: {
        'fade-in-left': 'fadeInLeft 1s ease-out forwards',
        'fade-in-right': 'fadeInRight 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pop': 'pop 1s ease-out forwards',
        "bounce-up-down": "bounce-up-down 0.6s ease-in-out infinite",
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '25%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        "bounce-up-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
