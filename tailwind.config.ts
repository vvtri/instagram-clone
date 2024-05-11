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
					auth: 'rgb(var(--tertiary-button-border))',
				},
				text: {
					primary: 'rgb(var(--primary-text))',
					secondary: 'rgb(var(--secondary-text))',
					tertiary: 'rgb(var(--tertiary-text))',
					tertiaryBtn: 'rgb(var(--tertiary-button-text))',
					disableAction: 'rgb(var(--disabled-action-text))',
					link: 'rgb(var(--link))',
					outlineBtn: 'rgb(var(--outline-btn-text))',
				},
				btn: {
					primary: 'rgb(var(--primary-button))',
					primaryHover: 'rgb(var(--primary-button-hover))',
					secondary: 'rgb(var(--secondary-button-background))',
					secondaryHover: 'rgb(var(--secondary-button-hover))',
					tertiaryBorder: 'rgb(var(--tertiary-button-border))',
				},
				separator: 'rgb(var(--separator)) ',
				bg: {
					primary: 'rgb(var(--primary-background))',
					secondary: 'rgb(var(--secondary-background))',
					hightLight: 'rgb(var(--highlight-background))',
					hoverOverlay: 'rgba(var(--hover-overlay))',
					banner: 'rgb(var(--banner-background))',
					mediaOverlay: 'rgb(var(--web-overlay-on-media))',
				},
				icon: {
					tertiary: 'rgb(var(--highlight-background))',
				},
				modal: {
					default: 'var(--modal-backdrop-default)',
				},
			},
			boxShadow: {
				container: '0 4px 12px rgba(0, 0, 0, 0.15)',
			},
			zIndex: {
				float: 'var(--z-float)',
				navbar: 'var(--z-navbar)',
				header: 'var(--z-header)',
				modal: 'var(--z-modal)',
				loading: 'var(--z-loading)',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
