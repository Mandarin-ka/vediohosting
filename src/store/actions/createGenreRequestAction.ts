import { movieSlice } from '../reducers/MovieReducer';
import { fetchMoviesByGenre } from '@/API/fetchMoviesByGenre';
import { AppDispatch } from '@/store';

export const createGenreRequestAction = (page?: number, genre?: string, isNewPage?: boolean) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(movieSlice.actions.movieFetching());

      const response = await fetchMoviesByGenre(page, genre);

      isNewPage
        ? dispatch(movieSlice.actions.movieFetchingNewPageSuccess(response.docs))
        : dispatch(movieSlice.actions.movieFetchingSuccess(response.docs));
    } catch (e) {
      dispatch(movieSlice.actions.movieFetchingError(e.message));
    }
  };
};
