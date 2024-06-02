import MovieCards from './MovieCards';
import { renderWithStore } from '@/tests/helpers/ReduxHelper';
import { render, screen, waitFor } from '@testing-library/react';
import { cardsMock } from '@/tests/mocks/cards';
import { Movie } from '@/types/movies';
import { act } from 'react';
import { fetchMoviesByGenre } from '@/API/kinopoisk/fetchMoviesByGenre';

jest.mock('./../../API/kinopoisk/fetchMoviesByGenre');

describe('Render Cards', () => {
  let response: Movie[];
  beforeEach(() => {
    response = cardsMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Render skeleton cards', async () => {
    await act(async () => {
      render(
        renderWithStore(
          <MovieCards
            query=''
            genre=''
            page={1}
            setPage={() => null}
            isLoadingNewPage={false}
            setIsLoadingNewPage={() => null}
          />
        )
      );
    });

    expect(screen.getAllByTestId('skeleton')).toHaveLength(16);
  });

  test('fetching cards', async () => {
    await act(async () => {
      const mockValue = jest.fn();
      await mockValue.mockResolvedValue(response);

      render(
        renderWithStore(
          <MovieCards
            query=''
            genre=''
            page={1}
            setPage={() => null}
            isLoadingNewPage={false}
            setIsLoadingNewPage={() => null}
          />
        )
      );
    });

    await waitFor(() => {
      expect(fetchMoviesByGenre).toHaveBeenCalledTimes(1);
    });
  });
});
