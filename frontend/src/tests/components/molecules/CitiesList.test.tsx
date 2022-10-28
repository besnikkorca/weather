import { render, screen } from '@testing-library/react';
import CitiesList from 'molecules/CitiesList';

describe('CitiesList', () => {
  it('should render', () => {
    const view = render(<CitiesList active="Ottawa" setActive={jest.fn()} />);

    expect(view).toMatchSnapshot();
  });

  it('should render with active city', () => {
    const view = render(<CitiesList active="Ottawa" setActive={jest.fn()} />);

    expect(view).toMatchSnapshot();
  });

  it('should render with Moscow active', () => {
    const view = render(<CitiesList active="Moscow" setActive={jest.fn()} />);

    expect(view).toMatchSnapshot();
  });

  it('should render with Tokyo active', () => {
    const view = render(<CitiesList active="Tokyo" setActive={jest.fn()} />);

    expect(view).toMatchSnapshot();
  });

  it('should call setActive when clicked', () => {
    const mockSetActive = jest.fn();
    render(<CitiesList active="Ottawa" setActive={mockSetActive} />);

    screen.getByText('Moscow').click();

    expect(mockSetActive).toBeCalledTimes(1);
  });

  it('should call setActive with Moscow when clicked', () => {
    const mockSetActive = jest.fn();
    render(<CitiesList active="Ottawa" setActive={mockSetActive} />);

    screen.getByText('Moscow').click();

    expect(mockSetActive).toBeCalledWith('Moscow');
  });
});
