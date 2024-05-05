import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: 'static.cdninstagram.com' },
			{ hostname: 'www.instagram.com' },
		],
	},
	webpack: function (config) {
		config.module.rules.push({
			test: /\.ya?ml$/,
			use: 'js-yaml-loader',
		});
		return config;
	},
};

export default withNextIntl(nextConfig);
