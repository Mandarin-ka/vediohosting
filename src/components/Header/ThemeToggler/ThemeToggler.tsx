import styles from './ThemeToggler.module.scss';

function ThemeToggler({ isActive = false }: { isActive?: boolean }) {
  return (
    <button className={`${styles.wrapper} ${styles[theme]} ${isActive && styles.active}`} onClick={onClick} data-testid="toggler">
      <div className={`${styles.bar} ${styles[theme]}`} />
      <div className={`${styles.toggler} ${styles[theme]}`} />
    </button>
  );
}

export default ThemeToggler;
