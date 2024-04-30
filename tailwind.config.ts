import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				instagram: {
					auth: '#dbdbdb',
				},
				text: {
					primary: '#000',
					secondary: '#737373',
					tertiary: '#C7C7C7 ',
					tertiaryBtn: '#C7C7C7 ',
					disableAction: '#A9DBFF',
					link: 'rgb(0, 55, 107)',
          outlineBtn: '#385185',
				},
				btn: {
					primary: '#0095F6',
					primaryHover: '#1877F2',
					secondary: '#262626',
				},
				separator: 'rgb(219,219,219)',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
