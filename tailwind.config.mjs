/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			screens: {

				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'mac': '1440px',
				'2xl': '1536px'

			},

			fontFamily: {

				"trumpsoftpro": [ "trumpsoftpro", "sans-serif" ],
				"open_sans": [ "Open Sans", "sans-serif" ]

			},

			colors: {

				"urbaninsight_light_gray": "#B1BECF",
				"urbaninsight_black": "#30384C",
				"urbaninsight_light_blue": "#F6F9FC",
				"urbaninsight_slate": "#5E6D89",
				"urbaninsight_red": "#ff4a4a",
				"urbaninsight_midnight_slate": "#1C212C",
				"urbaninsight_blue": "#53a0fd",
				"urbaninsight_dark_blue": "#5a35ed",
				"urbaninsight_dark_gray": "#888FA2"

			}

		},
	},
	plugins: [],
}
