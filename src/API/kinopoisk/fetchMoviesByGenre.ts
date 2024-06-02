import { headers, selectFields } from './config';
import { ResponseKiniopoisk } from '@/types/movies';
import axiosInstance from '@/utils/axios/axiosWithCache';

export const fetchMoviesByGenre = async (
  page?: number,
  genre?: string
): Promise<ResponseKiniopoisk> => {
  const url = 'https://api.kinopoisk.dev/v1.4/movie';
  const params = {
    limit: 16,
    page: page || 1,
    'genres.name': genre || null,
    selectFields: selectFields,
    sortField: ['top250'],
    notNullFields: ['videos.trailers.url'],
    sortType: [-1],
  };

  try {
    const responseWithCache = await axiosInstance.get(url, {
      headers,
      params: { ...params },
      paramsSerializer: { indexes: null },
      cache: { ttl: 60 * 1000 * 5 },
    });

    return responseWithCache.data;
  } catch (e) {
    return e;
  }
};
