import { render, screen } from '@testing-library/react';
import App from './App';

test('displays search for music text', () => {
  render(<App />);
  const textElement = screen.getByText(/Search for Music!/i);
  expect(textElement).toBeInTheDocument();
});

test('renders search bar', () => {
  render(<App />);
  const textElement = screen.getByText(/Search for Music!/i);
  expect(textElement).toBeInTheDocument();
});