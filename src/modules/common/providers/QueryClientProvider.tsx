'use client';
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderReactQuery,
} from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

export default function QueryClientProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false },
        },
      }),
  );

  return (
    <QueryClientProviderReactQuery client={queryClient}>
      {children}
    </QueryClientProviderReactQuery>
  );
}
