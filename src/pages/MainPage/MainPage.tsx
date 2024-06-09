import { useCallback, useState } from 'react';

import ControlPanel from '@/components/ControlPanel/ControlPanel';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Skeleton from '@/components/MovieCards/MovieCard/Skeleton/Skeleton';
import MovieCards from '@/components/MovieCards/MovieCards';
import Button from '@/components/styled/Buttons/PaginationButton/PaginationButton';
import { useAppSelector } from '@/hooks/useAppSelector';

import './MainPage.scss';

function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const onBurgerClick = useCallback(() => {
    setIsBurgerActive((prevValue) => !prevValue);
  }, []);

  const loadNewPage = useCallback(() => {
    setIsLoadingNewPage(true);
    setPage((prevValue) => prevValue + 1);
  }, []);

  return (
    <div className={`page ${theme}`} data-testid="app">
      {/* <Header setQuery={setQuery} query={query} isBurger={isBurgerActive} toggleBurger={onBurgerClick} />
      <ControlPanel genre={genre} setGenre={setGenre} setQuery={setQuery} isActive={isBurgerActive} resetActive={onBurgerClick} />

      <MovieCards
        query={query}
        genre={genre}
        page={page}
        isLoadingNewPage={isLoadingNewPage}
        setIsLoadingNewPage={setIsLoadingNewPage}
        setPage={setPage}
      />
      <Button onClick={loadNewPage}>Load More</Button>
      <Footer /> */}
      <Header setQuery={setQuery} query={query} isBurger={isBurgerActive} toggleBurger={onBurgerClick} />
      <Skeleton />
    </div>
  );
}

export default MainPage;
