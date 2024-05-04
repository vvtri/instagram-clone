'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { UserModel } from '../apis/auth.api';

type AuthContextData = UserModel | null;

const AuthContext = createContext<AuthContextData>(null);

export const useAuthContext = (initialState: AuthContextData) => {
	const [authContextData, setAuthContextData] =
		useState<AuthContextData>(initialState);

	return { AuthContext, authContextData, setAuthContextData };
};

export const useAuth = () => {
	const user = useContext(AuthContext) as UserModel;

	return { user };
};
