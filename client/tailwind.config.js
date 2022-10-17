/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         spacing: {
            '0.75': '5px',
            '1': '8px',
            '2': '12px',
            '3': '16px',
            '4': '24px',
            '5': '32px',
            '6': '48px',
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
           '53': '53px',
           '440': '440px',
           '1/2': '50%'
         },
         colors: {
            primary: '#5E60CE',
            'primary-dark': '#4a4ca9',
            violet: '#9B7CCD',
            'violet-dark': '#7a60a4',
            'sky-blue': '#49b1ea',
            overlay: '#00000026',
            'white-light': 'rgba(224, 224, 224, 0.27)',
            'white-dark': 'rgba(217, 217, 217, 0.47)'
         },
         minWidth: {
            '15': '15rem',
            '20': '20rem',
            '30': '30rem',
            '600': '600px',
            '9/10': 'calc(100% - 10px)',
         },
         maxWidth: {
            '20': '20rem',
            '30': '30rem',
            '600': '600px',
            '9/10': 'calc(100% - 20px)',
         },
         minHeight: {
            '40': '40rem',
            '20': '20rem',
         },
         maxHeight: {
            '40': '40rem',
            '20': '20rem',
            '9/10': 'calc(100vh - 20px)',
            '100vh-53': 'calc(100vh - 53px)',
         }
      },
      screens: {
         sm: '480px',
         md: '768px',
         lg: '976px',
         xl: '1440px',
      },

   },
   plugins: [],
   // important: true
}
