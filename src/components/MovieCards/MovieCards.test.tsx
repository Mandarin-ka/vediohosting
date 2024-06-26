import { act } from 'react';

import MovieCards from '.';
import { fetchMoviesByGenre } from '@/API/fetchMoviesByGenre';
import { renderWithSC } from '@/tests/helpers/SCHelper';
import { cardsMock } from '@/tests/mocks/cards';
import { Movie } from '@/types/movies';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('./../../API/fetchMoviesByGenre');

describe('Render Cards', () => {
  let response: { docs: Movie[] };
  beforeEach(() => {
    response = cardsMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Render empty array', async () => {
    await act(async () => {
      (fetchMoviesByGenre as jest.Mock).mockResolvedValue({ docs: [] });

      render(
        renderWithSC(
          <MovieCards query="" genre="" page={1} setPage={() => null} isLoadingNewPage={false} setIsLoadingNewPage={() => null} />,
        ),
      );
    });

    await waitFor(() => {
      expect(screen.queryAllByTestId('card').length).toBe(0);

      expect(screen.queryByText('Ничего не найдено.')).toBeInTheDocument();
    });
  });

  test('fetching cards', async () => {
    await act(async () => {
      (fetchMoviesByGenre as jest.Mock).mockResolvedValue(response);

      render(
        renderWithSC(
          <MovieCards query="" genre="" page={1} setPage={() => null} isLoadingNewPage={false} setIsLoadingNewPage={() => null} />,
        ),
      );
    });

    await waitFor(() => {
      expect(fetchMoviesByGenre).toHaveBeenCalledTimes(1);
      expect(screen.queryAllByTestId('card').length).toBeGreaterThan(0);
    });
  });
});
