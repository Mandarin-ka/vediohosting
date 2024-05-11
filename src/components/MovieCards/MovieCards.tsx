import MovieCard from './MovieCard/MovieCard';
import { Movie } from '@/types/movies';

import * as styles from './MovieCards.module.scss';
import { useEffect, useState } from 'react';
import { loadDataByGenre, loadDataByQuery } from '@/utils/data/loadData';

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
  const [movies, setMovies] = useState<Movie[] | null>([]);

  useEffect(() => {
    if (query) {
      loadDataByQuery(movies, isLoadingNewPage, setMovies, { page, query });
      isLoadingNewPage && setIsLoadingNewPage(false);
    } else {
      loadDataByGenre(movies, isLoadingNewPage, setMovies, { page, genre });
      isLoadingNewPage && setIsLoadingNewPage(false);
    }
  }, [page, genre, query]);

  return (
    <div className={styles.cards}>
      {movies.map((movie: Movie, index) => (
        <MovieCard movie={movie} key={movie?.id || index} />
      ))}
    </div>
  );
}

export default MovieCards;
