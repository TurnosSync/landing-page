/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				Primary: '#332C5C',
				Secondary: '#8976FD',
				White: '#f5f5f5',
				Black: '#090909'
			},
			screens: {
				xs: '430px'
			},
			fontFamily: {
				Inter: ['Inter Variable', 'sans-serif'],
				Nunito: ['Nunito Sans Variable', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif']
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
