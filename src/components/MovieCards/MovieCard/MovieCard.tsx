import { memo, useState } from 'react';

import Modal from '@/components/Modal/Modal';
import Skeleton from '@/components/MovieCards/MovieCard/Skeleton/Skeleton';
import Videoplayer from '@/components/Videoplayer/Videoplayer';
import { useAppSelector } from '@/hooks/useAppSelector';
import { ClickEventType } from '@/types/clickEventType';
import { Movie } from '@/types/movies';
import { getDirector } from '@/utils/getDirector';

import styles from './MovieCard.module.scss';

function MovieCard({ movie }: { movie?: Movie }) {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: ClickEventType) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return movie ? (
    <>
      {isModalOpen && (
        <Modal setIsActive={setIsModalOpen} isActive={isModalOpen}>
          <Videoplayer videoUrl={movie.videos?.trailers[0]?.url || ''} />
        </Modal>
      )}

      <div className={`${styles.card} ${styles[theme]}`} onClick={openModal} data-testid="card">
        <img src={movie.poster?.previewUrl || 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png'} alt="" className={styles.poster} />
        <div className={styles.wrapper}>
          <img src={getDirector(movie)?.photo} alt="" className={styles.thumbnail} />
          <div className={styles.info}>
            <h2 className={styles.title} data-testid="title">
              {movie.name || ' '}
            </h2>
            <div className={styles.bottom}>
              <h3 className={styles.director}>{getDirector(movie)?.name || 'Неизвестен'}</h3>
              <span className={styles.year}>{movie.year}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Skeleton />
  );
}

export default memo(MovieCard);
