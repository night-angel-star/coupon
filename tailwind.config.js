// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/js/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        // ...
    ],
    corePlugins: {
        preflight: false, // <== disable this!
    },
};
