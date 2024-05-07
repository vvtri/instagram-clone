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
					// secondaryDark: 'rgb(168, 168, 168) ',
					// tertiary: 'rgba(199, 199, 199)',
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
					hightLight: 'rgb(var(--highlight-background))',
					hoverOverlay: 'rgba(var(--hover-overlay))',
          banner: 'rgb(var(--banner-background))'
				},
				icon: {
					tertiary: 'rgb(var(--highlight-background)) rgba(199, 199, 199)',
					tertiaryDark: 'rgb(var(--highlight-background)) rgba(199, 199, 199)', //todo
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
