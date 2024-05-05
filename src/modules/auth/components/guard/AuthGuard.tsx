'use client';

import { CUR_PATH_NAME_HEADER_KEY } from '@/modules/common/constants/index.constant';
import AuthProvider from '@/modules/common/providers/AuthProvider';
import { cookies, headers } from 'next/headers';
import { redirect, usePathname } from 'next/navigation';
import React, { AwaitedReactNode, PropsWithChildren } from 'react';
import { getCurrentUser } from '../../apis/auth.api';
import { ACCESS_TOKEN_COOKIE_KEY } from '../../constants/auth.constant';
import { useCurrentUser } from '../../hooks/use-current-user.hook';
import LoadingScreen from '@/modules/common/components/loading/LoadingScreen';

const handleRedirect = (
	pathname: string,
	redirectComp?: React.ReactNode
): AwaitedReactNode => {
	let loginUrl = '/account/sign-in';

	if (redirectComp) return redirectComp as AwaitedReactNode;
	else {
		const searchParams = new URLSearchParams({
			next: pathname,
		}).toString();

		return redirect(`${loginUrl}/?${searchParams}`);
	}
};

type AuthGuardProps = PropsWithChildren<{
	redirectComp?: React.ReactNode | undefined;
}>;

export default function AuthGuard({ children, redirectComp }: AuthGuardProps) {
	const pathname = usePathname();
	const { data, isLoading, isFetching } = useCurrentUser();

	if (isLoading) {
		return <LoadingScreen />;
	}

	if (data) {
		return <AuthProvider user={data}>{children}</AuthProvider>;
	} else return handleRedirect(pathname, redirectComp);
}
