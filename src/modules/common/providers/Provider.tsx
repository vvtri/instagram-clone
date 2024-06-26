import { CookiesProvider } from 'next-client-cookies/server';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import OriginProvider from './OriginProvider';
import QueryClientProvider from './QueryClientProvider';
import StoreProvider from './StoreProvider';

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  const messages = useMessages();
  const commonMessage = { Client: messages.Client } as AbstractIntlMessages;

  return (
    <CookiesProvider>
      <NextIntlClientProvider messages={commonMessage}>
        <ThemeProvider enableSystem attribute="class" disableTransitionOnChange>
          <QueryClientProvider>
            <StoreProvider>
              <OriginProvider>{children}</OriginProvider>
            </StoreProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </CookiesProvider>
  );
}
