import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('renders header', () => {
  render(<Home />);
  const textElement = screen.getByText(/Stuff/i);
  expect(textElement).toBeInTheDocument();
});

test('renders add button', () => {
  render(<Home />);
  const textElement = screen.getByText(/add item/i);
  expect(textElement).toBeInTheDocument();
});
