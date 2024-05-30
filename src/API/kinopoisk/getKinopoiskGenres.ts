import { AxiosResponseGenre } from '@/types/axiosResponse';
import axiosInstance from '@/utils/axios/axiosWithCache';

export const getKinopoiskGenres = async (): Promise<AxiosResponseGenre> => {
  try {
    const url = 'https://api.kinopoisk.dev/v1/movie/possible-values-by-field';
    const params = { field: 'genres.name' };

    const dataWithCache: AxiosResponseGenre = await axiosInstance.get(url, {
      headers: {
        'X-API-KEY': process.env.X_API_KEY,
        'Content-Type': 'text/html; charset=utf-8',
      },
      params: { ...params },
      cache: { ttl: 60 * 1000 * 60 * 24 * 7 },
    });

    return dataWithCache;
  } catch (e: unknown) {
    console.error((e as Error).message);
  }
};
