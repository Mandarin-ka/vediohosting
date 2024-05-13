import { Movie } from '@/types/movies';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoviesState {
  movies: Movie[] | null;
  isLoading: boolean;
  error: string;
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: '',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    movieFetching(state) {
      state.isLoading = true;
    },
    movieFetchingNewPageSuccess(state, action: PayloadAction<Movie[]>) {
      state.isLoading = false;
      state.error = '';
      state.movies = [...state.movies, ...action.payload];
    },
    movieFetchingSuccess(state, action: PayloadAction<Movie[]>) {
      state.isLoading = false;
      state.error = '';
      state.movies = action.payload;
    },
    movieFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default movieSlice.reducer;
