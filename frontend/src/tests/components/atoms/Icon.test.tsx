import { render } from '@testing-library/react';
import Icon from 'atoms/Icon';

describe('Icon', () => {
  it('should render', () => {
    const view = render(<Icon name="cloud" size="large" />);

    expect(view).toMatchSnapshot();
  });

  it('should render cloud', () => {
    const view = render(<Icon name="cloud" size="large" />);

    expect(view).toMatchSnapshot();
  });

  it('should render cloud-rain', () => {
    const view = render(<Icon name="cloud-rain" size="large" />);

    expect(view).toMatchSnapshot();
  });

  it('should render cloud-sun', () => {
    const view = render(<Icon name="cloud-sun" size="large" />);

    expect(view).toMatchSnapshot();
  });

  it('should render large', () => {
    const view = render(<Icon name="cloud" size="large" />);

    expect(view).toMatchSnapshot();
  });

  it('should render medium', () => {
    const view = render(<Icon name="cloud" size="medium" />);

    expect(view).toMatchSnapshot();
  });

  it('should render normal', () => {
    const view = render(<Icon name="cloud" size="normal" />);

    expect(view).toMatchSnapshot();
  });
});
