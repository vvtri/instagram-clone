'use client';
import React, { PropsWithChildren, useState } from 'react';
import {
	QueryClient,
	QueryClientProvider as QueryClientProviderReactQuery,
} from '@tanstack/react-query';

export default function QueryClientProvider({ children }: PropsWithChildren) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: { refetchOnWindowFocus: false },
				},
			})
	);

	return (
		<QueryClientProviderReactQuery client={queryClient}>
			{children}
		</QueryClientProviderReactQuery>
	);
}
