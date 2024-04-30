import * as styles from './Skeleton.module.scss';

function Skeleton() {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.poster__stub} />
        <div className={styles.info__wrapper__stub}>
          <div className={styles.thumbnail__stub}></div>
          <div className={styles.info__stub}>
            <div className={styles.title__stub}></div>
            <div className={styles.bottom__info__stub}>
              <div className={styles.director__stub} />
              <div className={styles.year__stub} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
