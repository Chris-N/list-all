import { render, screen } from '@testing-library/react';
import { Home } from './Home';

import mockItems from 'data/items.json';

const mockSetState = jest.fn();

test('renders header', () => {
  render(<Home items={mockItems.data} setItems={mockSetState} />);
  const textElement = screen.getByText(/Stuff/i);
  expect(textElement).toBeInTheDocument();
});

test('renders add button', () => {
  render(<Home items={mockItems.data} setItems={mockSetState} />);
  const textElement = screen.getByText(/add item/i);
  expect(textElement).toBeInTheDocument();
});

test.todo('the handle toggle function calls and verify setState calls');
