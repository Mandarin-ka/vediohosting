import { baseUrl, cacheTime, headers, selectFields } from '@/constants/apiConfig';
import { ResponseKiniopoisk } from '@/types/movies';
import axiosInstance from '@/utils/axiosWithCache';

export const fetchMoviesByGenre = async (page?: number, genre?: string): Promise<ResponseKiniopoisk> => {
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
    const responseWithCache = await axiosInstance.get(baseUrl, {
      headers,
      params: { ...params },
      paramsSerializer: { indexes: null },
      cache: { ttl: cacheTime },
    });

    return responseWithCache.data;
  } catch (e) {
    return e;
  }
};
