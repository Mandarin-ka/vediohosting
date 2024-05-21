import { useEffect } from 'react';

import MovieCard from './MovieCard/MovieCard';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import {
  fetchMoviesByGenre,
  fetchMoviesByQuery,
} from '@/store/reducers/ActionCreator';
import { Movie } from '@/types/movies';

import * as styles from './MovieCards.module.scss';

interface Props {
  query: string;
  genre: string;
  page: number;
  isLoadingNewPage: boolean;
  setIsLoadingNewPage: (elem: boolean) => void;
}

function MovieCards({
  query,
  genre,
  page,
  isLoadingNewPage,
  setIsLoadingNewPage,
}: Props) {
  const dispatch = useAppDispatch();
  const { isLoading, movies } = useAppSelector((state) => state.MoviesReducer);

  useEffect(() => {
    if (query) {
      const isNewPageLoad = isLoadingNewPage;

      dispatch(fetchMoviesByQuery(page, query, isNewPageLoad));
      isLoadingNewPage && setIsLoadingNewPage(false);
    } else {
      const isNewPageLoad = isLoadingNewPage;

      dispatch(fetchMoviesByGenre(page, genre, isNewPageLoad));
      isLoadingNewPage && setIsLoadingNewPage(false);
    }
  }, [page, genre, query]);

  return (
    <div className={styles.cards}>
      {movies.map((movie: Movie, index: number) => (
        <MovieCard movie={movie} key={movie?.id || index} />
      ))}
      {isLoading &&
        Array(16)
          .fill(null)
          .map((e, i) => <MovieCard movie={e} key={i} />)}
    </div>
  );
}

export default MovieCards;
