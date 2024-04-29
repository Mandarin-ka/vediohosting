import { AxiosResponse } from '@/types/axiosResponse';
import axios from 'axios';

export const getKinoPoiskMovies = async (): Promise<AxiosResponse> => {
  try {
    const url = 'https://api.kinopoisk.dev/v1.4/movie';
    const params = {
      selectFields: ['id', 'names', 'year', 'persons', 'poster'],
      limit: 16,
    };

    const response: AxiosResponse = await axios.get(url, {
      headers: { 'X-API-KEY': 'VK03T2G-SSR406Z-N5FFKM9-1JWHZF7' }, //TODO: добавить в .env
      params: { ...params },
      paramsSerializer: { indexes: null },
    });

    return response;
  } catch (e: unknown) {
    console.error((e as Error).message);
  }
};
