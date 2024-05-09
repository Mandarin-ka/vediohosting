import axios from 'axios';

import { AxiosResponseMovies } from '@/types/axiosResponse';

export const getKinopoiskMovie = async (
  page?: number,
  query?: string
): Promise<AxiosResponseMovies> => {
  const url = 'https://api.kinopoisk.dev/v1.4/movie/search';
  const params = {
    limit: 16,
    page: page || 1,
    query: query,
    selectFields: ['id', 'names', 'year', 'poster', 'persons', 'name'],
  };

  try {
    const response: AxiosResponseMovies = await axios.get(url, {
      headers: { 'X-API-KEY': 'VK03T2G-SSR406Z-N5FFKM9-1JWHZF7' }, //TODO: добавить в .env
      params: { ...params },
      paramsSerializer: { indexes: null },
    });

    return response;
  } catch (e: unknown) {
    console.error((e as Error).message);
  }
};
