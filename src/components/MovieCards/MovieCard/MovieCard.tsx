import { memo } from 'react';

import { Movie } from '@/types/movies';
import Skeleton from '@/ui/Skeleton/Skeleton';
import { getOneDirector } from '@/utils/cards/getDirector';

import * as styles from './MovieCard.module.scss';

function MovieCard({ movie }: { movie: Movie }) {
  return movie ? (
    <div>
      <div className={styles.card}>
        <img src={movie.poster?.url || ''} alt='' className={styles.poster} />
        <div className={styles.info__wrapper}>
          <img
            src={getOneDirector(movie)?.photo || ''}
            alt=''
            className={styles.thumbnail}
          />
          <div className={styles.info}>
            <h2 className={styles.title}>{movie.name || '...'}</h2>
            <div className={styles.bottom__info}>
              <h3 className={styles.director}>
                {getOneDirector(movie)?.name || 'Неизвестно'}
              </h3>
              <span className={styles.year}>{movie.year || '...'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Skeleton />
  );
}

export default memo(MovieCard);
