import MovieCard from '.';
import { renderWithSC } from '@/tests/helpers/SCHelper';
import { cardsMock } from '@/tests/mocks/cards';
import { render, screen } from '@testing-library/react';

describe('Render card', () => {
  test('Render skeleton', () => {
    render(renderWithSC(<MovieCard />));

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  test('Render Card', () => {
    const card = cardsMock.docs[0];
    render(renderWithSC(<MovieCard movie={card} />));

    expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument();
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
