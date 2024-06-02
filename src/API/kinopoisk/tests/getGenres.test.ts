import axios from 'axios';

import { getGenres } from '../getGenres';
import { genresMock } from '@/tests/mocks/genres';

jest.mock('axios');

describe('Request to kinopoisk', () => {
  let response: { name: string; slug: string }[];

  beforeEach(() => {
    response = genresMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Axios called and return value', async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    const genres = await getGenres();

    expect(axios.get).toHaveBeenCalled();

    expect(genres).toHaveLength(32);
  });
});
