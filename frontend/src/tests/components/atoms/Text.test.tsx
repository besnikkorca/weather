import { render, screen } from '@testing-library/react';
import Text from 'atoms/Text';

describe('Text', () => {
  it('should render', () => {
    const view = render(<Text>Test</Text>);

    expect(view).toMatchSnapshot();
  });

  it('should render children', () => {
    render(<Text>Test</Text>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
