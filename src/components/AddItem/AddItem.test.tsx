import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { AddItem } from './AddItem';

import mockItems from 'data/items.json';

const mockSetState = jest.fn();
const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

test.todo('Rendering return button and check route to home screen');
test.todo('Rendering create button');

test('renders item input', () => {
  render(<AddItem items={mockItems.data} setItems={mockSetState} />);
  const inputElement = screen.getByLabelText(/Add Item/);
  expect(inputElement).toBeInTheDocument();
});
