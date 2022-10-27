import { useQuery, QueryFunction, UseQueryOptions, UseQueryResult, QueryKey } from 'react-query';

type Props<T = unknown, E = unknown> = {
  children: (query: UseQueryResult<T, E>) => JSX.Element;
  queryKey: QueryKey;
  fn: QueryFunction<T, QueryKey>;
  options?: Omit<UseQueryOptions<T, E, T, QueryKey>, 'queryKey' | 'queryFn'>;
};

export default function UseQuery<T, E = unknown>(props: Props<T, E>): JSX.Element {
  return props.children(useQuery(props.queryKey, props.fn, props.options));
}
