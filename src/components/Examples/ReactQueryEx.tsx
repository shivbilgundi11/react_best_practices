import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function ReactQueryEx() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>React Query Example</h1>
        </div>
      </QueryClientProvider>
    </>
  );
}
