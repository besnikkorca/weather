import { render, screen } from '@testing-library/react';
import List from 'atoms/List';

describe('List', () => {
  it('should render', () => {
    const view = render(<List>Test</List>);

    expect(view).toMatchSnapshot();
  });

  it('should render children', () => {
    render(<List>Test</List>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render with children', () => {
    const view = render(
      <List>
        <span>Test</span>
      </List>
    );

    expect(view).toMatchSnapshot();
  });
});
