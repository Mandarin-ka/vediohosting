import { useCallback, useEffect, useState } from 'react';

import { getKinopoiskMovie } from '@/API/kinopoisk/getKinopoiskMovie';
import { getKinopoiskMovies } from '@/API/kinopoisk/getKinopoiskMovies';
import ControlPanel from '@/components/ControlPanel/ControlPanel';
import ErrorBoundary from '@/components/ErrorBoundaries/ErrorBoundaries';
import Header from '@/components/Header/Header';
import MovieCards from '@/components/MovieCards/MovieCards';
import { AxiosResponseMovies } from '@/types/axiosResponse';
import { Movie } from '@/types/movies';
import Button from '@/ui/Buttons/PaginationButton/PaginationButton';

import '@/styles/reset.scss';
import '@/styles/vars.scss';

function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>('');
  const [movies, setMovies] = useState<Movie[] | null[]>([]);
  const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (!query) {
      if (isLoadingNewPage) {
        setMovies([...movies, ...Array(16).fill(null)]);
        getKinopoiskMovies(page, genre).then(
          (response: AxiosResponseMovies) => {
            setMovies([...movies, ...response.data.docs]);
          }
        );
        setIsLoadingNewPage(false);
      } else {
        setMovies(Array(16).fill(null));
        getKinopoiskMovies(page, genre).then(
          (response: AxiosResponseMovies) => {
            setMovies(response.data.docs);
          }
        );
      }
    } else {
      if (isLoadingNewPage) {
        setMovies([...movies, ...Array(16).fill(null)]);
        getKinopoiskMovie(1, query).then((response: AxiosResponseMovies) => {
          setMovies([...movies, ...response.data.docs]);
        });
        setIsLoadingNewPage(false);
      } else {
        setMovies(Array(16).fill(null));
        getKinopoiskMovie(1, query).then((response: AxiosResponseMovies) => {
          setMovies(response.data.docs);
        });
      }
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
    </ErrorBoundary>
  );
}

export default MainPage;
