/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: {
					50: '#FFFBF7',
					100: '#F1EDE9',
					200: '#DED6CF',
					300: '#C7BBAE',
					400: '#A7998B',
					500: '#9B8F82',
					600: '#7D7164',
					700: '#635A4F',
					800: '#4F4A45',
					900: '#44403C',
					1000: '#312E2B',
				},
				accent: {
					400: '#7EB3BF',
					500: '#6393A6',
				},
			},
		},
	},
	plugins: [],
};
