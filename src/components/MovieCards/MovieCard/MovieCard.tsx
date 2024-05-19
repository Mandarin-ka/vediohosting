import { memo, useState } from 'react';

import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { Movie } from '@/types/movies';
import Skeleton from '@/ui/Skeleton/Skeleton';
import { getOneDirector } from '@utils/cards/getDirector';

import * as styles from './MovieCard.module.scss';
import Videoplayer from '@/components/Videoplayer/Videoplayer';
import Modal from '@/components/Modal/Modal';
import { ClickEventType } from '@/components/Modal/config';

function MovieCard({ movie }: { movie: Movie }) {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: ClickEventType) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return movie ? (
    <div>
      {isModalOpen && (
        <Modal setIsActive={setIsModalOpen} isActive={isModalOpen}>
          <Videoplayer videoUrl={movie.videos.trailers[0].url} />
        </Modal>
      )}

      <div className={styles.card} onClick={openModal}>
        <img
          src={
            movie.poster?.url ||
            'https://cdn-icons-png.flaticon.com/512/4054/4054617.png'
          }
          alt=''
          className={styles.poster}
        />
        <div className={styles.info__wrapper}>
          <img
            src={getOneDirector(movie)?.photo}
            alt=''
            className={styles.thumbnail}
          />
          <div className={styles.info}>
            <h2 className={`${styles.title} ${styles[theme]}`}>
              {movie?.names[0]?.name || movie.name}
            </h2>
            <div className={styles.bottom__info}>
              <h3 className={`${styles.director} ${styles[theme]}`}>
                {getOneDirector(movie)?.name || 'Неизвестен'}
              </h3>
              <span className={`${styles.year} ${styles[theme]}`}>
                {movie.year}
              </span>
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
