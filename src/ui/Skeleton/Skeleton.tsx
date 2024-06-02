import { useAppSelector } from '@/hooks/redux/useAppSelector';

import styles from './Skeleton.module.scss';

function Skeleton() {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <div data-testid='skeleton'>
      <div className={`${styles.card} ${styles[theme]}`}>
        <div className={`${styles.poster} ${styles[theme]}`} />
        <div className={styles.wrapper}>
          <div className={`${styles.thumbnail} ${styles[theme]}`} />
          <div className={styles.info}>
            <div className={`${styles.title} ${styles[theme]}`} />
            <div className={styles.bottom}>
              <div className={`${styles.director}  ${styles[theme]}`} />
              <div className={`${styles.year} ${styles[theme]}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
