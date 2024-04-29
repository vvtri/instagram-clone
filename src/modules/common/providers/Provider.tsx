import React from 'react';
import StoreProvider from './StoreProvider';
import { ThemeProvider } from 'next-themes';

type ProviderProps = {
	children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
	return (
		<ThemeProvider enableSystem>
			<StoreProvider>{children}</StoreProvider>
		</ThemeProvider>
	);
}
