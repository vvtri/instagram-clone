import Provider from '@/modules/common/providers/Provider';
import type { Metadata } from 'next';
import Script from 'next/script';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../globals.css';

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
			<Script src='https://unpkg.com/detect-autofill@1.1.4/dist/detect-autofill.js' />

			<body
				style={{
					fontFamily: `apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
				}}
				className='relative bg-white text-black dark:bg-black dark:text-white'
			>
				<Provider>{children}</Provider>

				<ToastContainer />
			</body>
		</html>
	);
}
