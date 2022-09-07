import '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { AddItem } from './AddItem';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

test.todo('Rendering return button and check route to home screen');
test.todo('Rendering create button');

test('renders item input', () => {
  render(<AddItem />);
  const inputElement = screen.getByLabelText(/Add Item/);
  expect(inputElement).toBeInTheDocument();
});
