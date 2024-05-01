import MovieCard from './MovieCard/MovieCard';
import { Movie } from '@/types/movies';

import * as styles from './MovieCards.module.scss';

function MovieCards({ movies }: { movies: Movie[] }) {
  return (
    <div className={styles.cards}>
      {movies.map((movie: Movie, index) => (
        <MovieCard movie={movie} key={movie?.id || index} />
      ))}
    </div>
  );
}

export default MovieCards;
