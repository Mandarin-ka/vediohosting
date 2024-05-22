import axios from 'axios';

import { movieSlice } from '../MovieReducer';
import { AppDispatch } from '@/store/store';
import { ResponseKiniopoisk } from '@/types/movies';

export function fetchMoviesByQuery(
  page?: number,
  query?: string,
  isNewPage?: boolean,
  genre?: string
) {
  return async (dispatch: AppDispatch) => {
    const url = 'https://api.kinopoisk.dev/v1.4/movie';

    try {
      dispatch(movieSlice.actions.movieFetching());
      const responseIds = await axios.get<ResponseKiniopoisk>(`${url}/search`, {
        headers: { 'X-API-KEY': 'VK03T2G-SSR406Z-N5FFKM9-1JWHZF7' },
        params: { limit: 16, page: page || 1, query: query },
        paramsSerializer: { indexes: null },
      });

      const ids = responseIds.data.docs.map((e) => e.id);

      const response = await axios.get<ResponseKiniopoisk>(url, {
        headers: {
          'X-API-KEY': 'VK03T2G-SSR406Z-N5FFKM9-1JWHZF7',
        },
        params: {
          limit: 16,
          page: page || 1,
          id: ids,
          genre: genre || null,
          selectFields: [
            'id',
            'names',
            'year',
            'poster',
            'persons',
            'name',
            'videos',
          ],
        },
        paramsSerializer: { indexes: null },
      });

      if (isNewPage)
        dispatch(
          movieSlice.actions.movieFetchingNewPageSuccess(response.data.docs)
        );
      else {
        dispatch(movieSlice.actions.movieFetchingSuccess(Array(16).fill(null)));
        dispatch(movieSlice.actions.movieFetchingSuccess(response.data.docs));
      }
    } catch (e) {
      dispatch(movieSlice.actions.movieFetchingError(e.message));
    }
  };
}
