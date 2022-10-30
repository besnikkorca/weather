import { screen, render } from '@testing-library/react';
import Header from 'src/components/organisms/Header';
import cities from '../../toydata/citiesList';

describe('Header', () => {
  it('should render', () => {
    const { container } = render(<Header cities={cities} active="New York" setActive={() => {}} />);
    expect(container).toBeInTheDocument();
  });

  it('should render correctly', () => {
    const view = render(<Header cities={cities} active="Ottawa" setActive={() => {}} />);

    expect(view).toMatchSnapshot();
  });

  it('renders with Ottawa active', () => {
    render(<Header cities={cities} active="Ottawa" setActive={() => {}} />);

    expect(screen.getByText('Ottawa')).toHaveClass('active');
  });

  it('renders with Moscow active', () => {
    render(<Header cities={cities} active="Moscow" setActive={() => {}} />);

    expect(screen.getByText('Moscow')).toHaveClass('active');
  });

  it('renders with Tokyo active', () => {
    render(<Header cities={cities} active="Tokyo" setActive={() => {}} />);

    expect(screen.getByText('Tokyo')).toHaveClass('active');
  });

  it('should call setActive when clicked', () => {
    const mockSetActive = jest.fn();
    render(<Header cities={cities} active="Ottawa" setActive={mockSetActive} />);

    screen.getByText('Moscow').click();

    expect(mockSetActive).toBeCalledTimes(1);
  });
});
