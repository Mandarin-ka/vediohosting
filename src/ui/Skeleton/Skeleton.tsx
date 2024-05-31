import { useAppSelector } from '@/hooks/redux/useAppSelector';

import * as styles from './Skeleton.module.scss';

function Skeleton() {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <div data-testid='skeleton'>
      <div className={`${styles.card} ${styles[theme]}`}>
        <div className={`${styles.poster__stub} ${styles[theme]}`} />
        <div className={styles.info__wrapper__stub}>
          <div className={`${styles.thumbnail__stub} ${styles[theme]}`} />
          <div className={styles.info__stub}>
            <div className={`${styles.title__stub} ${styles[theme]}`} />
            <div className={styles.bottom__info__stub}>
              <div className={`${styles.director__stub}  ${styles[theme]}`} />
              <div className={`${styles.year__stub} ${styles[theme]}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
