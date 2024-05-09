import { useCallback, useEffect, useState } from 'react';

import { getKinopoiskMovies } from '@/API/kinopoisk/getKinopoiskMovies';
import { AxiosResponseMovies } from '@/types/axiosResponse';
import { Movie } from '@/types/movies';
import Button from '@/ui/Buttons/PaginationButton/PaginationButton';

import '@/styles/reset.scss';
import '@/styles/vars.scss';
import ErrorBoundary from '@/components/ErrorBoundaries/ErrorBoundaries';
import Header from '@/components/Header/Header';
import ControlPanel from '@/components/ControlPanel/ControlPanel';
import MovieCards from '@/components/MovieCards/MovieCards';

function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>('');
  const [movies, setMovies] = useState<Movie[] | null[]>([]);
  const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);

  useEffect(() => {
    if (isLoadingNewPage) {
      console.log('new page');
      setMovies([...movies, ...Array(16).fill(null)]);
      getKinopoiskMovies(page, genre).then((response: AxiosResponseMovies) => {
        if (isLoadingNewPage) {
          setMovies([...movies, ...response.data.docs]);
        }
      });
      setIsLoadingNewPage(false);
    } else {
      console.log('new genre');
      setMovies(Array(16).fill(null));
      getKinopoiskMovies(page, genre).then((response: AxiosResponseMovies) => {
        setMovies(response.data.docs);
      });
    }
  }, [page, genre]);

  const loadNewPage = useCallback(() => {
    setIsLoadingNewPage(true);
    setPage((prevValue) => prevValue + 1);
  }, []);

  return (
    <ErrorBoundary>
      <div className='App'>
        <Header />
        <ControlPanel genre={genre} setGenre={setGenre} />
        <MovieCards movies={movies} />
        <Button text='Load More' onClick={loadNewPage} />
      </div>
    </ErrorBoundary>
  );
}

export default MainPage;
