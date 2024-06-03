import { cacheTime, headers } from '@/constants/apiConfig';
import axiosInstance from '@/utils/axiosWithCache';

export const fetchGenres = async () => {
  try {
    const response = await axiosInstance.get('https://api.kinopoisk.dev/v1/movie/possible-values-by-field', {
      headers,
      params: { field: 'genres.name' },
      cache: { ttl: cacheTime },
    });

    return response.data;
  } catch (e: unknown) {
    return e;
  }
};
