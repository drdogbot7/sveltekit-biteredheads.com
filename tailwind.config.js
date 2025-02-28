/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				zilla: ['Zilla Slab', 'serif'],
				podkova: ['Podkova', 'serif']
			}
		}
	},
	plugins: []
};
