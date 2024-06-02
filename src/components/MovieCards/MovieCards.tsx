import { useEffect } from 'react';

import { CardsProps } from './config';
import MovieCard from './MovieCard/MovieCard';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { createGenreAction } from '@/store/actions/createGenreAction';
import { createQueryAction } from '@/store/actions/createQueryAction';
import { Movie } from '@/types/movies';

import styles from './MovieCards.module.scss';

function MovieCards({ query, genre, page, setPage, isLoadingNewPage, setIsLoadingNewPage }: CardsProps) {
  const dispatch = useAppDispatch();
  const { isLoading, movies, error } = useAppSelector((state) => state.MoviesReducer);

  useEffect(() => {
    query ? dispatch(createQueryAction(query, page, isLoadingNewPage, genre)) : dispatch(createGenreAction(page, genre, isLoadingNewPage));
    isLoadingNewPage ? setIsLoadingNewPage(false) : setPage(1);
  }, [page, genre, query]);

  if (movies.length || isLoading)
    return (
      <div className={styles.cards} data-testid='cards'>
        {movies.map((movie: Movie, index: number) => (
          <MovieCard movie={movie} key={movie?.id || index} />
        ))}
        {isLoading &&
          Array(16)
            .fill(null)
            .map((e, i) => <MovieCard movie={e} key={i} />)}
      </div>
    );

  if (error) return <h1 className={styles.error}>Произошла {error}. Попробуйте позже.</h1>;
  return <h1 className={styles.error}>Ничего не найдено.</h1>;
}

export default MovieCards;
