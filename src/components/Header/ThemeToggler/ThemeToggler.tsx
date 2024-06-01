import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { themeSlice } from '@/store/reducers/ThemeReducer';

import styles from './ThemeToggler.module.scss';

function ThemeToggler({ isActive = false }: { isActive?: boolean }) {
  const { theme } = useAppSelector((state) => state.ThemeReducer);
  const { changeTheme } = themeSlice.actions;
  const dispatch = useAppDispatch();

  const onClick = () => {
    if (theme === 'light') {
      dispatch(changeTheme({ theme: 'dark' }));
    } else {
      dispatch(changeTheme({ theme: 'light' }));
    }
  };

  return (
    <button
      className={`${styles.wrapper} ${styles[theme]} ${
        isActive && styles.active
      }`}
      onClick={onClick}
      data-testid='toggler'
    >
      <div className={`${styles.bar} ${styles[theme]}`} />
      <div className={`${styles.toggler} ${styles[theme]}`} />
    </button>
  );
}

export default ThemeToggler;
