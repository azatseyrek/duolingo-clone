import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import LearnPage from './page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<LearnPage />);
    // text: spanish with case sensitive
    const heading = screen.getByText(/Spanish/i);

    expect(heading).toBeInTheDocument();
  });
});
