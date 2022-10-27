import * as ReactQuery from 'react-query';

export default function mockUseQuery(implementation: (...args: any[]) => any) {
  return jest.spyOn(ReactQuery, 'useQuery').mockImplementation(implementation);
}
