/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.html',

    './src/**/*.html',

    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',

      './public/index.html',
    './src/**/*.{html,js}',

    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#003057',
        'login-text-color': '#374B58',
        'mygard-1':'#003057',
        'mygard-2': '#007CE0',
        'user-name':'text-custom-blue',
        'dashboad-top': '#FAFDFF',
        'dashboad-grid1': '#FAFAFA',
        'dashboad-grid2': '#FFFBF5',
        'cutomer-table-header':'#F6F7F9',
        'light-gery':'#4F4F4F'
      },
    },
  },
  plugins: [],
}

