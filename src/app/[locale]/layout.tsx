import Provider from '@/modules/common/providers/Provider';
import type { Metadata } from 'next';
import Script from 'next/script';
import '../../modules/common/css/variables.css';
import '../../modules/post/css/post.css';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../modules/common/css/globals.css';
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
	title: 'Instagram',
	description:
		"Connect with friends, share what you're up to, or see what's new from others all over the world. Explore our community where you can feel free to be yourself and share everything from your daily moments to life's highlights.",
};

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	return (
		<html lang={params.locale} suppressHydrationWarning className='relative'>
			

			<body
				style={{
					fontFamily: `apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Noto Color Emoji'`,
				}}
				className='relative bg-bg-primary text-text-primary'
			>
				<NextTopLoader />

				<Provider>{children}</Provider>

				<ToastContainer stacked closeOnClick />
			</body>
		</html>
	);
}
