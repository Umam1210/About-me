/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			s: '240px',
			xs: '475px',
			sm: '640px',
			md: '820px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1586px'
		}
	},
	plugins: []
};
