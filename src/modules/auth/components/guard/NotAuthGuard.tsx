'use client';

import LoadingScreen from '@/modules/common/components/loading/LoadingScreen';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { useCurrentUser } from '../../hooks/use-current-user.hook';

type NotAuthGuardProps = PropsWithChildren<{}>;

export default function NotAuthGuard({ children }: NotAuthGuardProps) {
	const { data, isLoading } = useCurrentUser();

	if (isLoading) {
		return <LoadingScreen />;
	}

	if (data) {
		return redirect('/');
	} else return children;
}
