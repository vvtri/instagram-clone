import React from 'react';
import StoreProvider from './StoreProvider';
import { ThemeProvider } from 'next-themes';
import {
	AbstractIntlMessages,
	NextIntlClientProvider,
	useMessages,
} from 'next-intl';

type ProviderProps = {
	children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
	const messages = useMessages();
	const commonMessage = { Client: messages.Client } as AbstractIntlMessages;

	return (
		<NextIntlClientProvider messages={commonMessage}>
			<ThemeProvider enableSystem>
				<StoreProvider>{children}</StoreProvider>
			</ThemeProvider>
		</NextIntlClientProvider>
	);
}
