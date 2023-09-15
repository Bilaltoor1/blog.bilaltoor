/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize:{
          'heading': '1.875rem',
      },
      colors:{
        'text-color': 'rgb(var(--color-text)/ <alpha-value>)',
        'background-color': 'rgb(var(--color-background)/ <alpha-value>)',
        'bg-main': 'rgb(var(--color-main-bg)/ <alpha-value>)',
        'heading': 'rgb(var(--color-heading)/ <alpha-value>)',
      },
      screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    typography: {
      DEFAULT: {
        css: { // Text color
          h1: {
            fontSize: '2.5rem',
            fontWeight: '800',
            lineHeight: '3rem',
            marginBottom: '1rem',
          },
          h2: {
            fontSize: '2rem',
            fontWeight: '700',
            lineHeight: '2.5rem',
            marginBottom: '1rem',
          },
          h3: {
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: '2rem',
            marginBottom: '0.875rem',
          },
          h4: {
            fontSize: '1.25rem',
            fontWeight: '600',
            lineHeight: '1.75rem',
            marginBottom: '0.75rem',
          },
          h5: {
            fontSize: '1.125rem',
            fontWeight: '600',
            lineHeight: '1.625rem',
            marginBottom: '0.625rem',
          },
          h6: {
            fontSize: '1rem',
            fontWeight: '600',
            lineHeight: '1.5rem',
            marginBottom: '0.5rem',
          },

          // Paragraph
          p: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            marginBottom: '1rem',
          },

          // Lists
          ul: {
            marginLeft: '1.5rem',
          },
          ol: {
            marginLeft: '1.5rem',
          },
          li: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            marginBottom: '0.5rem',
          },

          // Links
          a: {
            color: '#3182ce',
            textDecoration: 'underline',
            '&:hover': {
              color: '#2c5282',
            },
          },

          // Blockquotes
          blockquote: {
            borderLeftColor: '#e2e8f0',
            paddingLeft: '1rem',
            fontStyle: 'italic',
            color: '#555',
          },
          // 'pre code': {
          //   // Customize the code block background color
          //   backgroundColor: '#333',

          //   // Add a rainbow text effect using gradients
          //   background: `linear-gradient(45deg, #f06, #f90, #ff0, #0f0, #0ff, #00f, #90f, #f09, #f60)`,
          //   '-webkit-background-clip': 'text',
          //   'background-clip': 'text',
          //   color: 'transparent',

          //   // Other code block styles
          //   padding: '1rem',
          //   borderRadius: '0.25rem',
          //   fontSize: '1rem',
          //   lineHeight: '1.5rem'
          // },
          // Images
          'img': {
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '1rem',
          },

        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}
