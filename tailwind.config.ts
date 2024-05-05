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
					primaryDark: 'rgb(245, 245, 245)',
					secondary: 'rgb(115, 115, 115) ',
					secondaryDark: 'rgb(168, 168, 168) ',
					tertiary: 'rgba(199, 199, 199)',
					tertiaryBtn: '#C7C7C7 ',
					disableAction: '#A9DBFF',
					link: 'rgb(0, 55, 107)',
					outlineBtn: '#385185',
				},
				btn: {
					primary: '#0095F6',
					primaryHover: '#1877F2',
					secondary: 'rgb(239, 239, 239)',
					secondaryHover: 'rgb(219, 219, 219)',
					secondaryDark: 'rgb(54, 54, 54)', //todo
					secondaryHoverDark: 'rgb(38, 38, 38)', //todo
				},
				separator: 'rgb(219, 219, 219) ',
				separatorDark: 'rgb(54, 54, 54) ',
				bg: {
					hightLight: 'rgb(239, 239, 239)',
					highLightDark: 'rgb(38, 38, 38)',
					hoverOverlay: 'rgb(242, 242, 242)',
					hoverOverlayDark: 'rgba(255, 255, 255, 0.1)',
				},
				icon: {
					tertiary: 'rgba(199, 199, 199)',
					tertiaryDark: 'rgba(199, 199, 199)', //todo
				},
			},
			boxShadow: {
				container: '0 4px 12px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
