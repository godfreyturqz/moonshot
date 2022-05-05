import { QueryClient, QueryClientProvider } from 'react-query'

const QueryProvider: React.FC = ({ children }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000,
				refetchOnWindowFocus: false,
				retry: false,
			},
		},
	})

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default QueryProvider
