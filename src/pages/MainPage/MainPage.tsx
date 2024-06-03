import { useCallback, useState } from 'react';

import ControlPanel from '@/components/ControlPanel/ControlPanel';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MovieCards from '@/components/MovieCards/MovieCards';
import { useAppSelector } from '@/hooks/useAppSelector';
import Button from '@/components/PaginationButton/PaginationButton';

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
    <div className={`page ${theme}`}>
      <Header setQuery={setQuery} query={query} isBurger={isBurgerActive} toggleBurger={onBurgerClick} />
      <ControlPanel genre={genre} setGenre={setGenre} setQuery={setQuery} isActive={isBurgerActive} resetActive={onBurgerClick} />

      <MovieCards
        query={query}
        genre={genre}
        page={page}
        isLoadingNewPage={isLoadingNewPage}
        setIsLoadingNewPage={setIsLoadingNewPage}
        setPage={setPage}
      />
      <Button text="Load More" onClick={loadNewPage} />
      <Footer />
    </div>
  );
}

export default MainPage;
