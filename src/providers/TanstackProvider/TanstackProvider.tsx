'use client';

import { PropsWithChildren } from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const TanstackProvider = ({children}: PropsWithChildren) => {
	const queryClient = new QueryClient({
		//при неудачных попытках запрос будет отправляться 10 раз повторно с 1 до 30с
		defaultOptions: {
			queries: {
				retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
				retry: 10
			},
		},
	});
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false}/>
		</QueryClientProvider>	
	);
};