import { Component } from 'react';
import { QueryClientProvider as RQQueryClientProvider, QueryClient } from 'react-query';

interface QueryClientProviderProps {
  children: React.ReactNode;
}

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

export default class QueryClientProvider extends Component<QueryClientProviderProps, {}> {
  render() {
    return <RQQueryClientProvider client={client}>{this.props.children}</RQQueryClientProvider>;
  }
}
