import SearchBar from './SearchBar/SearchBar';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import { useAppSelector } from '@/hooks/redux/useAppSelector';

import * as styles from './Header.module.scss';

function Header({ setQuery }: { setQuery: (query: string) => void }) {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <header className={styles.header}>
      <div className={styles.logo__wrapper}>
        <div className={`${styles.logo} ${styles[theme]}`}>
          <div className={styles.triangle}></div>
        </div>
        <h1 className={`${styles.title} ${styles[theme]}`}>ModsenFilms</h1>
      </div>
      <SearchBar setQuery={setQuery} />
      <ThemeToggler />
    </header>
  );
}

export default Header;
