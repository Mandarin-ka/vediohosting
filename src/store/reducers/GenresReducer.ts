import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Genre {
  label: string;
  value: string;
}

interface GenresState {
  isLoading: boolean;
  genres: Genre[];
  error: string;
}

const initialState: GenresState = {
  isLoading: false,
  genres: [{ label: 'Все', value: '' }],
  error: '',
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    genresFetching(state) {
      state.isLoading = true;
    },
    genresFetchingSuccess(state, action: PayloadAction<Genre[]>) {
      state.isLoading = false;
      state.error = '';
      state.genres = [...state.genres, ...action.payload];
    },

    genresFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default genresSlice.reducer;
