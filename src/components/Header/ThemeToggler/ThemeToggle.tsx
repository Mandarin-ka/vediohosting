import { useState } from 'react';
import * as styles from './ThemeToggler.module.scss';

function ThemeToggler() {
  const [isActive, setIsActive] = useState(false);

  const setActiveClassName = (className: string) => {
    if (isActive) {
      return `${styles[className]} ${styles['active']}`;
    } else {
      return styles[className];
    }
  };

  return (
    <div
      className={styles.toggler__wrapper}
      onClick={() => setIsActive((prevValue) => !prevValue)}
    >
      <div className={setActiveClassName('toggler__bar')} />
      <div className={setActiveClassName('toggler')} />
    </div>
  );
}

export default ThemeToggler;
