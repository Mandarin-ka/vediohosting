import { movieSlice } from '../reducers/MovieReducer';
import { fetchMoviesByQuery } from '@/API/fetchMoviesByQuery';
import { AppDispatch } from '@/store/store';

export const createQueryRequestAction = (query: string, page?: number, isNewPage?: boolean, genre?: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(movieSlice.actions.movieFetching());

      const response = await fetchMoviesByQuery(query, page, genre);

      isNewPage
        ? dispatch(movieSlice.actions.movieFetchingNewPageSuccess(response.docs))
        : dispatch(movieSlice.actions.movieFetchingSuccess(response.docs));
    } catch (e) {
      dispatch(movieSlice.actions.movieFetchingError(e.message));
    }
  };
};
