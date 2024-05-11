'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { UserModel } from '../apis/auth.api';

export type AuthContextData = {
	user: UserModel | null;
	signOut: () => any;
};

const initialAuthContextData: AuthContextData = {
	signOut: () => {},
	user: null,
};

const AuthContext = createContext<AuthContextData>(initialAuthContextData);

export const useAuthContext = () => {
	const [authContextData, setAuthContextData] = useState<AuthContextData>(
		initialAuthContextData
	);

	return {
		AuthContext,
		authContextData,
		setAuthContextData,
		initialAuthContextData,
	};
};

export const useAuth = () => {
	const { user, signOut } = useContext(AuthContext);

	return { user: user as UserModel, signOut };
};
