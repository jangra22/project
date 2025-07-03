/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        excel: {
          green: '#107C41',
          lightgreen: '#E2EFDA',
          blue: '#0078D4',
          lightblue: '#DEECF9',
          gray: {
            50: '#FAFAFA',
            100: '#F3F2F1',
            200: '#EDEBE9',
            300: '#E1DFDD',
            400: '#D2D0CE',
            500: '#A19F9D',
            600: '#8A8886',
            700: '#605E5C',
            800: '#323130',
            900: '#201F1E'
          }
        },
        status: {
          complete: '#107C41',
          'in-progress': '#FF8C00',
          'to-start': '#0078D4',
          blocked: '#D13438',
          submitted: '#8764B8'
        },
        priority: {
          high: '#D13438',
          medium: '#FF8C00',
          low: '#107C41'
        }
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '11px',
        'sm': '12px',
        'base': '14px',
        'lg': '16px'
      }
    },
  },
  plugins: [],
}