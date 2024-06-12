import { useCallback, useState } from 'react';

import { StyledPage } from './styled';
import ControlPanel from '@/components/ControlPanel';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MovieCards from '@/components/MovieCards/MovieCards';
import Button from '@/components/styled/Buttons/PaginationButton/PaginationButton';

function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const onBurgerClick = useCallback(() => {
    setIsBurgerActive((prevValue) => !prevValue);
  }, []);

  const loadNewPage = useCallback(() => {
    setIsLoadingNewPage(true);
    setPage((prevValue) => prevValue + 1);
  }, []);

  return (
    <StyledPage>
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
      <Button onClick={loadNewPage}>Load More</Button>
      <Footer />
    </StyledPage>
  );
}

export default MainPage;
