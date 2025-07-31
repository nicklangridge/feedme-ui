import { QueryClient, QueryClientProvider, type DefaultOptions } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import theme from '@/theme';
import { MainErrorFallback } from '@/components/errors/main';

type AppProviderProps = {
  children: React.ReactNode;
};

const queryConfig = {
  queries: {
    // throwOnError: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

export const AppProvider = ({ children }: AppProviderProps) => {

  const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: queryConfig }));

  return (
    <React.Suspense
      fallback={
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {!import.meta.env.DEV && <ReactQueryDevtools />}
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
