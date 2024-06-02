import { movieSlice } from '../MovieReducer';
import { fetchMoviesByGenre } from '@/API/kinopoisk/fetchMoviesByGenre';
import { AppDispatch } from '@/store/store';

export function createGenreAction(
  page?: number,
  genre?: string,
  isNewPage?: boolean
) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(movieSlice.actions.movieFetching());

      const response = await fetchMoviesByGenre(page, genre);

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
