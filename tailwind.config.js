/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ADB5',
        secondary: '#393E46',
        light: '#EEEEEE',
        dark: '#222831',
      },
    },
  },
  safelist: [
    'bg-red-400',
    'bg-blue-400',
    'bg-yellow-400',
    'bg-green-400',
    'bg-red-100',
    'bg-blue-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-red-200',
    'bg-blue-200',
    'bg-yellow-200',
    'bg-green-200',
    
    'text-red-500',
    'text-blue-500',
    'text-yellow-500',
    'text-green-500',
    'text-red-400',
    'text-blue-400',
    'text-yellow-400',
    'text-green-400',
    'text-red-800',
    'text-blue-800',
    'text-yellow-800',
    'text-green-800',
  ],
  plugins: [],
}
