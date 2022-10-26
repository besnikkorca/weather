import { render, screen } from '@testing-library/react';
import Container from 'atoms/Container';

test('render screen container', () => {
  const content = 'Hello world!';
  render(<Container full>{content}</Container>);
  const children = screen.getByText(content);
  expect(children).toBeInTheDocument();
});

test('render full screen container', () => {
  const content = 'Hello world!';
  render(<Container>{content}</Container>);
  const children = screen.getByText(content);
  expect(children).toBeInTheDocument();
});
