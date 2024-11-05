/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				Primary: '#ff9102',
				Secondary: '#160b55',
				White: '#f5f5f5',
				Black: '#090909'
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
		require('@tailwindcss/typography'),
		function ({ addComponents }) {
			addComponents({
				'.title': {
					'font-size': '3.75rem',
					'line-height': '1'
				},
				'.subtitle': {
					'font-size': '1.875rem',
					'line-height': '2.25rem'
				}
			});
		}
	],
}
