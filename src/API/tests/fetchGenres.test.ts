import axios from 'axios';

import { fetchGenres } from '../fetchGenres';
import { genresMock } from '@/tests/mocks/genres';

jest.mock('axios');

describe('Request to kinopoisk', () => {
  let response: { data: { name: string; slug: string }[] };

  beforeEach(() => {
    response = genresMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Axios called and return value', async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    const genres = await fetchGenres();

    expect(axios.get).toHaveBeenCalled();
  });
});
