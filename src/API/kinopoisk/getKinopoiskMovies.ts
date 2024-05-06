import axios from 'axios';

import { AxiosResponseMovies } from '@/types/axiosResponse';

export const getKinopoiskMovies = async (
  page?: number,
  genre?: string
): Promise<AxiosResponseMovies> => {
  try {
    const url = 'https://api.kinopoisk.dev/v1.4/movie';
    const params = {
      selectFields: [
        'id',
        'name',
        'year',
        'persons',
        'poster',
        'genres',
        'names',
      ],
      limit: 16,
      page: page || 1,
      'genres.name': genre || null,
      notNullFields: [
        'poster.url',
        'persons.profession',
        'persons.enProfession',
        'persons.name',
        'persons.enName',
      ],
    };

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
