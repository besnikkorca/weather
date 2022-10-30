import { render, screen } from '@testing-library/react';
import Switch from 'atoms/Switch';

describe('Switch', () => {
  it('should render correctly', () => {
    const { container } = render(<Switch checked setChecked={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when not checked', () => {
    const { container } = render(<Switch checked={false} setChecked={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when checked', () => {
    const { container } = render(<Switch checked setChecked={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('should call setChecked when clicked', () => {
    const setChecked = jest.fn();
    render(<Switch checked setChecked={setChecked} />);
    screen.getByRole('checkbox').click();
    expect(setChecked).toHaveBeenCalled();
  });

  it('should call setChecked with correct value when clicked', () => {
    const setChecked = jest.fn();
    render(<Switch checked setChecked={setChecked} />);
    screen.getByRole('checkbox').click();
    expect(setChecked).toHaveBeenCalledWith(false);
  });
});
