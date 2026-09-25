import { render, screen } from '@testing-library/react';
import App from './App';
import ProjectPage from './App';

test('renders learn react link', () => {
  render(<ProjectPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
