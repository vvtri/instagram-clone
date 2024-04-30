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
};

export default withNextIntl(nextConfig);
