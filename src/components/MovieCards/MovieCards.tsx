import { useEffect } from 'react';

import MovieCard from './MovieCard/MovieCard';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { fetchMoviesByGenre } from '@/store/reducers/ActionCreators/fetchMoviesByGenre';
import { fetchMoviesByQuery } from '@/store/reducers/ActionCreators/fetchMoviesByQuery';
import { Movie } from '@/types/movies';

import * as styles from './MovieCards.module.scss';

interface Props {
  query: string;
  genre: string;
  page: number;
  setPage: (page: number) => void;
  isLoadingNewPage: boolean;
  setIsLoadingNewPage: (elem: boolean) => void;
}

function MovieCards({
  query,
  genre,
  page,
  setPage,
  isLoadingNewPage,
  setIsLoadingNewPage,
}: Props) {
  const dispatch = useAppDispatch();
  const { isLoading, movies } = useAppSelector((state) => state.MoviesReducer);

  useEffect(() => {
    if (query) {
      dispatch(fetchMoviesByQuery(query, page, isLoadingNewPage, genre));
    } else {
      dispatch(fetchMoviesByGenre(page, genre, isLoadingNewPage));
    }

    if (isLoadingNewPage) {
      setIsLoadingNewPage(false);
    } else {
      setPage(1);
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
