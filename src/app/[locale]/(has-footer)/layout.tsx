import Footer from '@/modules/common/components/footer/Footer';

export default function HasFooterLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	return (
		<>
			{children}

			<Footer />
		</>
	);
}
