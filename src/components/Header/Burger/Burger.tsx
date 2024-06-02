import { useAppSelector } from '@/hooks/redux/useAppSelector';

import styles from './Burger.module.scss';

function Burger({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  const className = isActive && 'active';
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <button
      className={`${styles.burger} ${styles[className]} ${styles[theme]}`}
      onClick={onClick}
      data-testid='burger'
    >
      <div className={styles.line} />
    </button>
  );
}

export default Burger;
