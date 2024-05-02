import { CUR_PATH_NAME_HEADER_KEY } from '@/modules/common/constants/index.constant';
import AuthProvider from '@/modules/common/providers/AuthProvider';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React, { AwaitedReactNode, PropsWithChildren } from 'react';
import { getCurrentUser } from '../../apis/auth.api';
import { ACCESS_TOKEN_COOKIE_KEY } from '../../constants/auth.constant';

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

export default async function AuthGuard({
	children,
	redirectComp,
}: AuthGuardProps) {
	const nextCookies = cookies();
	const nextHeaders = headers();

	const pathname = nextHeaders.get(CUR_PATH_NAME_HEADER_KEY) || '/';

	const token = nextCookies.get(ACCESS_TOKEN_COOKIE_KEY)?.value;

	if (!token) return handleRedirect(pathname, redirectComp);

	try {
		const user = await getCurrentUser(token);

		return <AuthProvider user={user}>{children}</AuthProvider>;
	} catch (error) {
		return handleRedirect(pathname, redirectComp);
	}
}
