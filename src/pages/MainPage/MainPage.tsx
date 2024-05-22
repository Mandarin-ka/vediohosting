import { useCallback, useState } from 'react';

import { useAppSelector } from '@/hooks/redux/useAppSelector';
import ControlPanel from '@components/ControlPanel/ControlPanel';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import MovieCards from '@components/MovieCards/MovieCards';
import Button from '@ui/Buttons/PaginationButton/PaginationButton';

import './MainPage.scss';

function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);
  const { theme } = useAppSelector((state) => state.ThemeReducer);

  const loadNewPage = useCallback(() => {
    setIsLoadingNewPage(true);
    setPage((prevValue) => prevValue + 1);
  }, []);

  return (
    <div className={`App ${theme}`}>
      <main>
        <Header setQuery={setQuery} />
        {/* <ControlPanel genre={genre} setGenre={setGenre} /> */}

        <MovieCards
          query={query}
          genre={genre}
          page={page}
          isLoadingNewPage={isLoadingNewPage}
          setIsLoadingNewPage={setIsLoadingNewPage}
          setPage={setPage}
        />
        <Button text='Load More' onClick={loadNewPage} />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
