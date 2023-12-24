/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                myBlack: "#0E0E0E",
                myOlive: "#335a54",
                myGray: "#868685",
                myTan: "#cabcaa",
                myCream: "#f6f2ea",
            },
        },
    },
    plugins: [],
};
