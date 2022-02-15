import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders New York Times label', () => {
  render(<App />);
  const linkElement = screen.getByText(/New York Times/i);
  expect(linkElement).toBeInTheDocument();
});
