'use client';
import { LANGUAGE_COOKIE_KEY } from '@/constants/i18n.constant';
import { UserModel } from '@/modules/auth/apis/auth.api';
import { ACCESS_TOKEN_COOKIE_KEY } from '@/modules/auth/constants/auth.constant';
import {
	AuthContextData,
	useAuthContext,
} from '@/modules/auth/hooks/use-auth.hook';
import { useCurrentUser } from '@/modules/auth/hooks/use-current-user.hook';
import { useCookies } from 'next-client-cookies';
import { useTheme } from 'next-themes';
import React, { PropsWithChildren, useEffect } from 'react';

type AuthProviderProps = PropsWithChildren<{
	user: UserModel;
}>;

export default function AuthProvider({ user, children }: AuthProviderProps) {
	const { AuthContext, setAuthContextData, initialAuthContextData } =
		useAuthContext();
	const { refetch } = useCurrentUser();
	const { setTheme, resolvedTheme } = useTheme();
	const cookies = useCookies();

	const signOut = () => {
		setAuthContextData(initialAuthContextData);
		cookies.remove(ACCESS_TOKEN_COOKIE_KEY);
		refetch();
	};

	const authContextData: AuthContextData = {
		user,
		signOut,
	};

	useEffect(() => {
		const { user } = authContextData;
		if (!user) return;

		setTheme(user.theme);
		cookies.set(LANGUAGE_COOKIE_KEY, user.lang);
		return () => {};
	}, [authContextData.user]);

	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	);
}
