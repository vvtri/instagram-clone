'use client';
import React, { PropsWithChildren, useState } from 'react';
import {
	QueryClient,
	QueryClientProvider as QueryClientProviderReactQuery,
} from 'react-query';

export default function QueryClientProvider({ children }: PropsWithChildren) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProviderReactQuery client={queryClient}>
			{children}
		</QueryClientProviderReactQuery>
	);
}
