import Burger from './Burger';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { StyledHeader } from './styled';
import ThemeToggler from './ThemeToggler';

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
  return (
    <StyledHeader data-testid="header">
      <Logo />
      <SearchBar setQuery={setQuery} query={query} />
      <Burger className={isBurger && 'active'} onClick={toggleBurger} />
      <ThemeToggler isBurgerActive={isBurger} />
    </StyledHeader>
  );
}

export default Header;
