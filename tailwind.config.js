/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
		fontFamily: { f1: ['Alice'], f2: ['El Messiri', 'Rowdies'], f3: ['Cookie', 'Satisfy'] },
	},
	plugins: [require("flowbite/plugin")],
};
