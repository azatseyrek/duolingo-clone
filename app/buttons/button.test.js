import { render, screen } from '@testing-library/react';

import ButtonsPage from './page';

describe('ButtonsPage Component', () => {
  const buttonLabels = [
    'Default',
    'Primary',
    'Primary Outline',
    'Secondary',
    'Secondary Outline',
    'Danger',
    'Danger Outline',
    'Super',
    'Super Outline',
    'Ghost',
    'Sidebar',
    'Sidebar Outline',
  ];

  buttonLabels.forEach((label) => {
    test(`renders ${label} button correctly`, () => {
      render(<ButtonsPage />);
      const button = screen.getByText(label);
      expect(button).toBeInTheDocument();
    });
  });
});
