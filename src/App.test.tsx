import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const textElement = screen.getByText(/Stuff/i);
  expect(textElement).toBeInTheDocument();
});

test('renders add button', () => {
  render(<App />);
  const textElement = screen.getByText(/add item/i);
  expect(textElement).toBeInTheDocument();
});
