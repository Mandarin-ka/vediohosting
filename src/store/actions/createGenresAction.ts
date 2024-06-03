import { genresSlice } from '../reducers/GenresReducer';
import { movieSlice } from '../reducers/MovieReducer';
import { fetchGenres } from '@/API/fetchGenres';
import { AppDispatch } from '@/store/store';
import { apiGenre } from '@/types/genres';
import { mapGenres } from '@/utils/mapGenres';

export function createGenresAction() {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(movieSlice.actions.movieFetching());

      const response: apiGenre[] = await fetchGenres();

      dispatch(genresSlice.actions.genresFetchingSuccess(mapGenres(response)));
    } catch (e) {
      dispatch(movieSlice.actions.movieFetchingError(e.message));
    }
  };
}
