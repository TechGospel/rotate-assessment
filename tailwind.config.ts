import type { Config } from "tailwindcss";

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			backgroundImage: {
				'custom-radial':
					'radial-gradient(circle at top right, #E84D70 0%, #A337F6 53%, #28A7ED 100%)',
			},
		},
	},
	plugins: [],
} satisfies Config;
