import { movieSlice } from '../MovieReducer';
import { AppDispatch } from '@/store/store';
import { ResponseKiniopoisk } from '@/types/movies';
import axiosInstance from '@/utils/axios/axiosWithCache';

export function fetchMoviesByQuery(
  query: string,
  page?: number,
  isNewPage?: boolean,
  genre?: string
) {
  return async (dispatch: AppDispatch) => {
    const url = 'https://api.kinopoisk.dev/v1.4/movie';

    console.log(query);

    try {
      dispatch(movieSlice.actions.movieFetching());

      const responseIds = await axiosInstance.get<ResponseKiniopoisk>(
        `${url}/search`,
        {
          headers: {
            'X-API-KEY': process.env.X_API_KEY,
            'Content-Type': 'text/html; charset=utf-8',
          },
          params: { limit: 16, page: page || 1, query: query },
          paramsSerializer: { indexes: null },
        }
      );

      const ids = responseIds.data.docs.map((e) => e.id);

      const response = await axiosInstance.get<ResponseKiniopoisk>(url, {
        headers: {
          'X-API-KEY': process.env.X_API_KEY,
          'Content-Type': 'text/html; charset=utf-8',
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

      console.log(response);

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
