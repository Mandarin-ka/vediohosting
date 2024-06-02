import Burger from './Burger/Burger';
import SearchBar from './SearchBar/SearchBar';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import { useAppSelector } from '@/hooks/redux/useAppSelector';

import styles from './Header.module.scss';

function Header({
  query,
  setQuery,
  isBurger,
  toggleBurger,
}: {
  query: string;
  setQuery: (query: string) => void;
  isBurger: boolean;
  toggleBurger: () => void;
}) {
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={`${styles.logo} ${styles[theme]}`} data-testid='logo'>
          <div className={styles.triangle} />
        </div>
        <h1 className={`${styles.title} ${styles[theme]}`}>ModsenFilms</h1>
      </div>
      <SearchBar setQuery={setQuery} query={query} />
      <Burger isActive={isBurger} onClick={toggleBurger} />
      <ThemeToggler isActive={isBurger} />
    </header>
  );
}

export default Header;
