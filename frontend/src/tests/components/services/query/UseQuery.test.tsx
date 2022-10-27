import { render, screen } from '@testing-library/react';
import UseQuery from 'services/query/UseQuery';
import mockUseQuery from './mockUseQuery';

describe('UseQuery', () => {
  it('should render successfully', () => {
    const useQuerySpy = mockUseQuery((key, fn, options) => ({
      data: fn({ queryKey: [], meta: {} }),
      isLoading: false,
      isError: false,
    }));

    const props = {
      queryKey: ['test'],
      fn: () => 'Moscow weather',
      options: {},
    };

    const { baseElement } = render(
      <UseQuery<string> {...props}>{(query) => <div>{query.data}</div>}</UseQuery>
    );

    const child = screen.getByText('Moscow weather');

    expect(child).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
    expect(useQuerySpy).toHaveBeenCalled();
  });

  it('should render error', () => {
    const useQuerySpy = mockUseQuery((key, fn, options) => ({
      data: fn({ queryKey: [], meta: {} }),
      isLoading: false,
      isError: true,
    }));

    const props = {
      queryKey: ['test'],
      fn: () => {
        return 'Moscow weather';
      },
      options: {},
    };

    const { baseElement } = render(
      <UseQuery<string> {...props}>
        {(query) => (query.isError ? <div>Error occurred</div> : <div>{query.data}</div>)}
      </UseQuery>
    );

    const child = screen.getByText('Error occurred');

    expect(child).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
    expect(useQuerySpy).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
