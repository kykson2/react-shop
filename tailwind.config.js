/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1025px',
            xl: '1280px',
            xl2: '1360px',
        },
        extend: {
            spacing: {
                640: '40rem',
                '60px': '60px',
                '512px': '512px',
            },
            transitionDuration: {
                0: '0ms',
                2000: '2000ms',
            },
        },
    },

    plugins: [],
};
