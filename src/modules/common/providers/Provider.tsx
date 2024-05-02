import {
	AbstractIntlMessages,
	NextIntlClientProvider,
	useMessages,
} from 'next-intl';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import QueryClientProvider from './QueryClientProvider';
import StoreProvider from './StoreProvider';

type ProviderProps = {
	children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
	const messages = useMessages();
	const commonMessage = { Client: messages.Client } as AbstractIntlMessages;

	return (
		<NextIntlClientProvider messages={commonMessage}>
			<ThemeProvider enableSystem>
				<QueryClientProvider>
					<StoreProvider>{children}</StoreProvider>
				</QueryClientProvider>
			</ThemeProvider>
		</NextIntlClientProvider>
	);
}
