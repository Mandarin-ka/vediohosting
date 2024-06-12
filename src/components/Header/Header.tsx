import Burger from '../styled/Burger/Burger';
import ThemeToggler from '../styled/ThemeToggler/ThemeToggler';
import SearchBar from './SearchBar/SearchBar';
// import ThemeToggler from './ThemeToggler/ThemeToggler';
import { useAppSelector } from '@/hooks/useAppSelector';

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
    <header className={styles.header} data-testid="header">
      <div className={styles.wrapper}>
        <div className={`${styles.logo} ${styles[theme]}`} data-testid="logo">
          <div className={styles.triangle} />
        </div>

        <h1 className={`${styles.title} ${styles[theme]}`}>ModsenFilms</h1>
      </div>

      <SearchBar setQuery={setQuery} query={query} />

      <Burger className={isBurger && 'active'} onClick={toggleBurger} />
      {/* <ThemeToggler isActive={isBurger} /> */}
      <ThemeToggler isBurgerActive={isBurger} />
    </header>
  );
}

export default Header;
