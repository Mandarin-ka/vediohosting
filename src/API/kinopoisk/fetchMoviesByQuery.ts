import { base_url, headers } from './config';
import { ResponseKiniopoisk } from '@/types/movies';
import axiosInstance from '@/utils/axios/axiosWithCache';

export const fetchMoviesByQuery = async (
  query: string,
  page?: number,
  genre?: string
) => {
  try {
    const responseIds = await axiosInstance.get<ResponseKiniopoisk>(
      `${base_url}/search`,
      {
        headers,
        params: { limit: 16, page: page || 1, query: query },
        paramsSerializer: { indexes: null },
      }
    );

    const ids = responseIds.data.docs.map((e) => e.id);

    const response = await axiosInstance.get<ResponseKiniopoisk>(base_url, {
      headers,
      params: {
        limit: 16,
        id: ids,
        genre: genre || null,
      },
      paramsSerializer: { indexes: null },
    });

    return response.data;
  } catch (e) {
    return e;
  }
};
