import * as react from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  react.render(<App />);
  const linkElement = react.screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
