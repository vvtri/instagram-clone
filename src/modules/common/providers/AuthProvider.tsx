'use client';
import { LANGUAGE_COOKIE_KEY } from '@/constants/i18n.constant';
import { UserModel } from '@/modules/auth/apis/auth.api';
import { useAuthContext } from '@/modules/auth/hooks/use-auth.hook';
import { useCookies } from 'next-client-cookies';
import { useTheme } from 'next-themes';
import React, { PropsWithChildren, useEffect } from 'react';

type AuthProviderProps = PropsWithChildren<{
	user: UserModel;
}>;

export default function AuthProvider({ user, children }: AuthProviderProps) {
	const { AuthContext, authContextData } = useAuthContext(user);
	const { setTheme, resolvedTheme } = useTheme();
	const cookies = useCookies();

	useEffect(() => {
		if (!authContextData) return;

		setTheme(authContextData.theme);

		cookies.set(LANGUAGE_COOKIE_KEY, authContextData.lang);
		return () => {};
	}, [authContextData]);

	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	);
}
