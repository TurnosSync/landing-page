/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				Primary: '#ff9102',
				Secondary: '#160b55',
				White: '#f5f5f5',
				Black: '#161616'
			},
			screens: {
				xs: '430px'
			},
			fontFamily: {
				System: ['system-ui', 'sans-serif']
			},
		}
	},

	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				'.btn': {
					padding: theme('spacing.4'),
					margin: 'auto'
				}
			});
		}
	],
}
