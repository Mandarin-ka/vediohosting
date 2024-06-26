import { combineReducers } from 'redux';

import GenresReducer from './reducers/GenresReducer';
import MoviesReducer from './reducers/MovieReducer';
import ThemeReducer from './reducers/ThemeReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ ThemeReducer, MoviesReducer, GenresReducer });

export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
