import {
	AbstractIntlMessages,
	NextIntlClientProvider,
	useMessages,
} from 'next-intl';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import QueryClientProvider from './QueryClientProvider';
import StoreProvider from './StoreProvider';
import { CookiesProvider } from 'next-client-cookies/server';

type ProviderProps = {
	children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
	const messages = useMessages();
	const commonMessage = { Client: messages.Client } as AbstractIntlMessages;

	return (
		<CookiesProvider>
			<NextIntlClientProvider messages={commonMessage}>
				<ThemeProvider enableSystem attribute='class'>
					<QueryClientProvider>
						<StoreProvider>{children}</StoreProvider>
					</QueryClientProvider>
				</ThemeProvider>
			</NextIntlClientProvider>
		</CookiesProvider>
	);
}
