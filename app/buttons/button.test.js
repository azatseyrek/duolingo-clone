import { render, screen } from '@testing-library/react';

import ButtonsPage from './page';

describe('ButtonsPage Component', () => {
  test('renders all buttons correctly', () => {
    render(<ButtonsPage />);

    const defaultButton = screen.getByText('Default');
    const primaryButton = screen.getByText('Primary');
    const primaryOutlineButton = screen.getByText('Primary Outline');
    const secondaryButton = screen.getByText('Secondary');
    const secondaryOutlineButton = screen.getByText('Primary');
    const dangerButton = screen.getByText('Danger');
    const dangerOutlineButton = screen.getByText('Danger Outline');
    const superButton = screen.getByText('Super');
    const superOutlineButton = screen.getByText('Super Outline');
    const ghostButton = screen.getByText('Ghost');
    const sidebarButton = screen.getByText('Sidebar');
    const sidebarOutlineButton = screen.getByText('Sidebar Outline');

    expect(defaultButton).toBeInTheDocument();
    expect(primaryButton).toBeInTheDocument();
    expect(primaryOutlineButton).toBeInTheDocument();
    expect(secondaryButton).toBeInTheDocument();
    expect(secondaryOutlineButton).toBeInTheDocument();
    expect(dangerButton).toBeInTheDocument();
    expect(dangerOutlineButton).toBeInTheDocument();
    expect(superButton).toBeInTheDocument();
    expect(superOutlineButton).toBeInTheDocument();
    expect(ghostButton).toBeInTheDocument();
    expect(sidebarButton).toBeInTheDocument();
    expect(sidebarOutlineButton).toBeInTheDocument();
  });
});
