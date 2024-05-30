import { movieSlice } from '../MovieReducer';
import { AppDispatch } from '@/store/store';
import axiosInstance from '@/utils/axios/axiosWithCache';

export function fetchMoviesByGenre(
  page?: number,
  genre?: string,
  isNewPage?: boolean
) {
  return async (dispatch: AppDispatch) => {
    const url = 'https://api.kinopoisk.dev/v1.4/movie';
    const params = {
      limit: 16,
      page: page || 1,
      'genres.name': genre || null,
      selectFields: [
        'id',
        'names',
        'year',
        'poster',
        'persons',
        'name',
        'videos',
      ],
      sortField: ['top250'],
      notNullFields: ['videos.trailers.url'],
      sortType: [-1],
    };

    try {
      dispatch(movieSlice.actions.movieFetching());

      const responseWithCache = await axiosInstance.get(url, {
        headers: {
          'X-API-KEY': process.env.X_API_KEY,
          'Content-Type': 'text/html; charset=utf-8',
        },
        params: { ...params },
        paramsSerializer: { indexes: null },
        cache: { ttl: 60 * 1000 * 5 },
      });

      if (isNewPage) {
        dispatch(
          movieSlice.actions.movieFetchingNewPageSuccess(
            responseWithCache.data.docs
          )
        );
      } else {
        dispatch(movieSlice.actions.movieFetchingSuccess(Array(16).fill(null)));
        dispatch(
          movieSlice.actions.movieFetchingSuccess(responseWithCache.data.docs)
        );
      }
    } catch (e) {
      dispatch(movieSlice.actions.movieFetchingError(e.message));
    }
  };
}
