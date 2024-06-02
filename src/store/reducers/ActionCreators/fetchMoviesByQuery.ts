import { movieSlice } from '../MovieReducer';
import { fetchMoviesByQuery } from '@/API/kinopoisk/fetchMoviesByQuery';
import { AppDispatch } from '@/store/store';

export function createQueryAction(
  query: string,
  page?: number,
  isNewPage?: boolean,
  genre?: string
) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(movieSlice.actions.movieFetching());

      const response = await fetchMoviesByQuery(query, page, genre);

      if (isNewPage) {
        dispatch(movieSlice.actions.movieFetchingNewPageSuccess(response.docs));
      } else {
        dispatch(movieSlice.actions.movieFetchingSuccess(Array(16).fill(null)));
        dispatch(movieSlice.actions.movieFetchingSuccess(response.docs));
      }
    } catch (e) {
      dispatch(movieSlice.actions.movieFetchingError(e.message));
    }
  };
}
