import { Movie } from '@/types/movies';
import MovieCard from './MovieCard/MovieCard';
import * as styles from './MovieCards.module.scss';

function MovieCards({ movies }: { movies: Movie[] }) {
  return (
    <div className={styles.cards}>
      {movies.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieCards;
