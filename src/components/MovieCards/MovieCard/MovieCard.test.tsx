import { renderWithStore } from '@/tests/helpers/ReduxHelper';
import { cardsMock } from '@/tests/mocks/cards';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import MovieCard from './MovieCard';

describe('Render card', () => {
  test('Render skeleton', () => {
    render(renderWithStore(<MovieCard />));

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  test('Render Card', () => {
    const card = cardsMock[0];
    render(renderWithStore(<MovieCard movie={card} />));

    expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument();
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
