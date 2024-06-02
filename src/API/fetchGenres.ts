import { cacheTime, headers } from '@/constants/apiConfig';
import { AxiosResponseGenre } from '@/types/axiosResponse';
import axiosInstance from '@/utils/axios/axiosWithCache';

export const fetchGenres = async (): Promise<AxiosResponseGenre> => {
  try {
    const dataWithCache: AxiosResponseGenre = await axiosInstance.get('https://api.kinopoisk.dev/v1/movie/possible-values-by-field', {
      headers,
      params: { field: 'genres.name' },
      cache: { ttl: cacheTime },
    });

    return dataWithCache;
  } catch (e: unknown) {
    console.error((e as Error).message);
  }
};
