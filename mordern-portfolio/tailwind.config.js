// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B6BFB',
        'primary-focus': '#0456B5',
        'primary-content': '#FFFFFF',
        secondary: '#696A75',
        'secondary-focus': '#3B3C4A',
        'secondary-content': '#FFFFFF',
        accent: '#3CC2B8',
        'accent-focus': '#3A574A',
        'accent-content': '#FFFFFF',
        neutral: '#181A2A',
        'neutral-focus': '#141624',
        'neutral-content': '#FFFFFF',
        'base-100': '#FFFFFF',
        'base-200': '#F6F7F7',
        'base-300': '#EBECEA',
        'base-content': '#181A2A',
      },
      fontSize: {
        'b1': ['24px', '32px'],
        'b2': ['20px', '26px'],
        'b3': ['18px', '24px'],
        'b4': ['16px', '24px'],
        'b5': ['14px', '20px'],
        'b6': ['12px', '16px'],
        'h1': ['36px', '40px'],
        'h2': ['30px', '36px'],
        'h3': ['24px', '32px'],
        'h4': ['20px', '26px'],
        'h5': ['16px', '24px'],
        'h6': ['14px', '20px'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}
