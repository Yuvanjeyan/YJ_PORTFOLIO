import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /secure modern web solutions/i })
  ).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /download cv/i }).length).toBeGreaterThan(0);
});
