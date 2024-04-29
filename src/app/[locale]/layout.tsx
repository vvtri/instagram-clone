import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Provider from '@/modules/common/providers/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Instagram',
	description:
		"Connect with friends, share what you're up to, or see what's new from others all over the world. Explore our community where you can feel free to be yourself and share everything from your daily moments to life's highlights.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				style={{
					fontFamily: `apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
				}}
			>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
