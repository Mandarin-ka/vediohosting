import axios from 'axios';

import { AppDispatch } from '../store';
import { movieSlice } from './MovieReducer';
import { ResponseKiniopoisk } from '@/types/movies';

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
      selectFields: ['id', 'names', 'year', 'poster', 'persons', 'name'],
      sortField: ['audience.count'],
      sortType: [-1],
    };

    try {
      dispatch(movieSlice.actions.movieFetching());

      const response = await axios.get<ResponseKiniopoisk>(url, {
        headers: { 'X-API-KEY': 'VK03T2G-SSR406Z-N5FFKM9-1JWHZF7' },
        params: { ...params },
        paramsSerializer: { indexes: null },
      });

      if (isNewPage) {
        dispatch(
          movieSlice.actions.movieFetchingNewPageSuccess(response.data.docs)
        );
      } else {
        dispatch(movieSlice.actions.movieFetchingSuccess(Array(16).fill(null)));
        dispatch(movieSlice.actions.movieFetchingSuccess(response.data.docs));
      }
    } catch (e) {
      dispatch(movieSlice.actions.movieFetchingError(e.message));
    }
  };
}

export function fetchMoviesByQuery(
  page?: number,
  query?: string,
  isNewPage?: boolean
) {
  return async (dispatch: AppDispatch) => {
    const url = 'https://api.kinopoisk.dev/v1.4/movie/search';
    const params = {
      limit: 16,
      page: page || 1,
      query: query,
    };

    try {
      dispatch(movieSlice.actions.movieFetching());
      const response = await axios.get<ResponseKiniopoisk>(url, {
        headers: { 'X-API-KEY': 'VK03T2G-SSR406Z-N5FFKM9-1JWHZF7' }, //TODO: добавить в .env
        params: { ...params },
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
