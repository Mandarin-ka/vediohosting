import { renderWithStore } from '@/tests/helpers/ReduxHelper';
import ThemeToggler from './ThemeToggler';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('Render toggler', () => {
  test('Toggle theme', async () => {
    render(renderWithStore(<ThemeToggler />));

    const toggler = screen.getByTestId('toggler');

    expect(toggler).toBeInTheDocument();
    expect(toggler).toHaveClass('light');
    await userEvent.click(toggler);
    expect(toggler).toHaveClass('light');
  });
});
