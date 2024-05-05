import AuthGuard from '@/modules/auth/components/guard/AuthGuard';
import React from 'react';

export default function SearchPage() {
	return (
		<AuthGuard>
			<div>SearchPage</div>
		</AuthGuard>
	);
}
