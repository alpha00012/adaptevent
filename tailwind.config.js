/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        screen: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'

        },
        extend: {
            colors: {
                'primary': '#e87722',
                'secondary': '#00629b',
                'dark-primary': '#9b4e0b',
                'light-primary' : '#011e3f',
                'dark-secondary': '#112f5d',
                'light-secondary' : '#740e33',
                'danger': '#D20F46',
                'success': '#00FF00',
                'warning': '#c29133',
                'info': '#00FFFF',
                'light': '#eeeeee',
                'dark': '#121517',
                'dark-grey': '#7C8BA1',
                'grey': '#E5E5E5'
            }

        }
    },
    plugins: []
};