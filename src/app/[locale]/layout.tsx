import Footer from '@/modules/common/components/footer/Footer';
import Provider from '@/modules/common/providers/Provider';
import type { Metadata } from 'next';
import '../globals.css';
import Script from 'next/script';

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
		<html lang={params.locale} suppressHydrationWarning>
			<Script src='https://unpkg.com/detect-autofill@1.1.4/dist/detect-autofill.js' />

			<body
				style={{
					fontFamily: `apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
				}}
			>
				<Provider>{children}</Provider>

				<Footer />
			</body>
		</html>
	);
}
