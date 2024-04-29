import { Movie } from '@/types/movies';
import * as styles from './MovieCard.module.scss';
import { getDirectors } from '@/utils/cards/getDirector';

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div>
      <div className={styles.card}>
        <img src={movie.poster.url} alt='' className={styles.poster} />
        <div className={styles.info__wrapper}>
          <img
            src={getDirectors(movie)[0].photo}
            alt=''
            className={styles.thumbnail}
          />
          <div className={styles.info}>
            <h2 className={styles.title}>{movie.names[0].name || '...'}</h2>
            <h3 className={styles.director}>
              {getDirectors(movie)[0].name || 'Неизвестно'}
            </h3>
            <span className={styles.year}>{movie.year || '...'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
