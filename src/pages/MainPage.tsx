import { useCallback, useEffect, useState } from 'react';

import { Movie } from '@/types/movies';
import ControlPanel from '@components/ControlPanel/ControlPanel';
import ErrorBoundary from '@components/ErrorBoundaries/ErrorBoundaries';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import MovieCards from '@components/MovieCards/MovieCards';
import Button from '@ui/Buttons/PaginationButton/PaginationButton';

function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);

  const loadNewPage = useCallback(() => {
    setIsLoadingNewPage(true);
    setPage((prevValue) => prevValue + 1);
  }, []);

  return (
    <ErrorBoundary>
      <div className='App'>
        <Header setQuery={setQuery} />
        <ControlPanel genre={genre} setGenre={setGenre} />
        <MovieCards
          query={query}
          genre={genre}
          page={page}
          isLoadingNewPage={isLoadingNewPage}
          setIsLoadingNewPage={setIsLoadingNewPage}
        />
        <Button text='Load More' onClick={loadNewPage} />
      </div>

      <Footer />
    </ErrorBoundary>
  );
}

export default MainPage;
