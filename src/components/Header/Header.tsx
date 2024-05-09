import SearchBar from './SearchBar/SearchBar';
import ThemeToggler from './ThemeToggler/ThemeToggle';

import * as styles from './Header.module.scss';

function Header({ setQuery }: { setQuery: (query: string) => void }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo__wrapper}>
        <div className={styles.logo}>
          <div className={styles.triangle}></div>
        </div>
        <h1 className={styles.title}>ModsenFilms</h1>
      </div>
      <SearchBar setQuery={setQuery} />
      <ThemeToggler />
    </header>
  );
}

export default Header;
