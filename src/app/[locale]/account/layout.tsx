import NotAuthGuard from '@/modules/auth/components/guard/NotAuthGuard';
import Footer from '@/modules/common/components/footer/Footer';
import React, { PropsWithChildren } from 'react';

export default function AccountLayout({ children }: PropsWithChildren) {
	return (
		<NotAuthGuard>
			{children}
			<Footer />
		</NotAuthGuard>
	);
}
