import { screen, render } from '@testing-library/react';
import Header from 'src/components/organisms/Header';

describe('Header', () => {
  it('should render', () => {
    const view = render(<Header active="Ottawa" setActive={() => {}} />);

    expect(view).toMatchSnapshot();
  });

  it('renders with Ottawa active', () => {
    render(<Header active="Ottawa" setActive={() => {}} />);

    expect(screen.getByText('Ottawa')).toHaveClass('active');
  });

  it('renders with Moscow active', () => {
    render(<Header active="Moscow" setActive={() => {}} />);

    expect(screen.getByText('Moscow')).toHaveClass('active');
  });

  it('renders with Tokyo active', () => {
    render(<Header active="Tokyo" setActive={() => {}} />);

    expect(screen.getByText('Tokyo')).toHaveClass('active');
  });

  it('should call setActive when clicked', () => {
    const mockSetActive = jest.fn();
    render(<Header active="Ottawa" setActive={mockSetActive} />);

    screen.getByText('Moscow').click();

    expect(mockSetActive).toBeCalledTimes(1);
  });
});
