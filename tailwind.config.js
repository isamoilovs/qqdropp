/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      header: '#1b1c24',
      headerBtn: '#21222b',
      headerBtnText: '#5f616f',
      headerBtnTextHover: '#9193a4', 
      headerBtnGradFrom: '#272831',
      headerBtnGradTo: '#3d2f37',
      headerBtnTextActive: '#f2ae6f'
    },
    screens: {
      '2xl': {'max' : '1200px'},
      'xl': {'max' : '900px'},
      'lg': {'max' : '599px'},
    }
  },
  variants: {
    fill: ['hover', 'focus']
  },
  plugins: []
}
