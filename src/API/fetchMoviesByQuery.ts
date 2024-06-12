import { baseUrl, cacheTime, headers } from '@/constants/apiConfig';
import { Movie } from '@/types/movies';
import axiosInstance from '@/utils/axiosWithCache';

export const fetchMoviesByQuery = async (query: string, page?: number, genre?: string) => {
  try {
    const responseIds = await axiosInstance.get(`${baseUrl}/search`, {
      headers,
      params: { limit: 16, page: page || 1, query: query },
      paramsSerializer: { indexes: null },
    });

    const ids: number[] = responseIds.data.docs.map((e: Movie) => e.id);

    //API не дает возможность выполнить все одним запросом.
    const response = await axiosInstance.get(baseUrl, {
      headers,
      params: {
        limit: 16,
        id: ids,
        genre: genre || null,
      },
      paramsSerializer: { indexes: null },
      cache: { ttl: cacheTime },
    });

    return response.data;
  } catch (e) {
    return e;
  }
};
