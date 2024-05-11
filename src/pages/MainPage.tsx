import { useCallback, useEffect, useState } from 'react';

import { getKinopoiskMovie } from '@/API/kinopoisk/getKinopoiskMovie';
import { getKinopoiskMovies } from '@/API/kinopoisk/getKinopoiskMovies';
import ControlPanel from '@/components/ControlPanel/ControlPanel';
import ErrorBoundary from '@/components/ErrorBoundaries/ErrorBoundaries';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MovieCards from '@/components/MovieCards/MovieCards';
import { AxiosResponseMovies } from '@/types/axiosResponse';
import { Movie } from '@/types/movies';
import Button from '@/ui/Buttons/PaginationButton/PaginationButton';
import { kinopoiskData } from '@/fakeData/kinopoiskMovies';
import { loadDataByGenre, loadDataByQuery } from '@/utils/data/loadData';

function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>('');
  const [movies, setMovies] = useState<Movie[] | null[]>([]);
  const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (query) {
      loadDataByQuery(movies, isLoadingNewPage, setMovies, { page, query });
      isLoadingNewPage && setIsLoadingNewPage(false);
    } else {
      loadDataByGenre(movies, isLoadingNewPage, setMovies, { page, genre });
      isLoadingNewPage && setIsLoadingNewPage(false);
    }
  }, [page, genre, query]);

  const loadNewPage = useCallback(() => {
    setIsLoadingNewPage(true);
    setPage((prevValue) => prevValue + 1);
  }, []);

  return (
    <ErrorBoundary>
      <div className='App'>
        <Header setQuery={setQuery} />
        <ControlPanel genre={genre} setGenre={setGenre} />
        <MovieCards movies={movies} />
        <Button text='Load More' onClick={loadNewPage} />
      </div>

      <Footer />
    </ErrorBoundary>
  );
}

export default MainPage;
