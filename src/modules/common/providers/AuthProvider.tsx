'use client';
import { UserModel } from '@/modules/auth/apis/auth.api';
import { useAuthContext } from '@/modules/auth/hooks/use-auth.hook';
import React, { PropsWithChildren } from 'react';

type AuthProviderProps = PropsWithChildren<{
	user: UserModel;
}>;

export default function AuthProvider({ user, children }: AuthProviderProps) {
	const { AuthContext, authContextData } = useAuthContext(user);

	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	);
}
