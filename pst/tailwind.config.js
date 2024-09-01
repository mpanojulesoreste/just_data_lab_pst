module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'hover:bg-red-600',
    'hover:bg-blue-600',
    'hover:bg-green-600',
    'hover:bg-yellow-600',
    'text-blue-600',
    'text-gray-600',
    'hover:text-gray-900',
    'bg-gray-50',
    'bg-white',
    'hover:bg-gray-100',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}