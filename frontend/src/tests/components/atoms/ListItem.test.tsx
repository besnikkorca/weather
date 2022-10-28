import { render, screen } from '@testing-library/react';
import ListItem from 'atoms/ListItem';

const onClick = () => {};

describe('ListItem', () => {
  it('should render without being active', () => {
    const view = render(
      <ListItem onClick={onClick} active={false}>
        Test
      </ListItem>
    );

    expect(view).toMatchSnapshot();
  });

  it('should render being active', () => {
    const view = render(
      <ListItem onClick={onClick} active>
        Test
      </ListItem>
    );

    expect(view).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <ListItem onClick={onClick} active>
        Test
      </ListItem>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render being active with children', () => {
    const view = render(
      <ListItem onClick={onClick} active>
        <span>Test</span>
      </ListItem>
    );

    expect(view).toMatchSnapshot();
  });

  it('should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <ListItem onClick={mockOnClick} active>
        Test
      </ListItem>
    );

    screen.getByText('Test').click();

    expect(mockOnClick).toBeCalledTimes(1);
  });

  it('should call onClick with children when clicked', () => {
    const onClick = jest.fn();
    render(
      <ListItem onClick={onClick} active>
        Test
      </ListItem>
    );

    screen.getByText('Test').click();

    expect(onClick).toHaveBeenCalledWith('Test');
  });
});
