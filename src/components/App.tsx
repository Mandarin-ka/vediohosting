import { useCallback, useEffect, useState } from 'react';

import ControlPanel from './ControlPanel/ControlPanel';
import ErrorBoundary from './ErrorBoundaries/ErrorBoundaries';
import MovieCards from './MovieCards/MovieCards';
import { getKinopoiskMovies } from '@/API/kinopoisk/getKinopoiskMovies';
// import { kinopoiskData } from '@/fakeData/kinopoiskMovies'; //TODO: Fake
import { AxiosResponseMovies } from '@/types/axiosResponse';
import { Movie } from '@/types/movies';
import Button from '@/ui/Buttons/PaginationButton/PaginationButton';

import '@/styles/reset.scss';
import '@/styles/vars.scss';
import Header from './Header/Header';

function App() {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<string>('');
  const [movies, setMovies] = useState<Movie[] | null[]>([]);
  const [isLoadingNewPage, setIsLoadingNewPage] = useState<boolean>(false);

  useEffect(() => {
    // setMovies([...movies, ...Array(16).fill(null)]);
    // getKinopoiskMovies(page, genre).then((response: AxiosResponseMovies) => {
    //   if (movies[0]) {
    //     setMovies([...movies, ...response.data.docs]);
    //   }
    // });
    // setTimeout(
    //   () => setMovies(kinopoiskData.docs), //TODO: Fake
    //   1000
    // );
    if (isLoadingNewPage) {
      setMovies([...movies, ...Array(16).fill(null)]);
      getKinopoiskMovies(page, genre).then((response: AxiosResponseMovies) => {
        if (isLoadingNewPage) {
          setMovies([...movies, ...Array(16).fill(null)]);
          setMovies([...movies, ...response.data.docs]);
        }
      });
    } else {
      setMovies(Array(16).fill(null));
      getKinopoiskMovies(page, genre).then((response: AxiosResponseMovies) => {
        setMovies(response.data.docs);
        setIsLoadingNewPage(false);
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

export default App;
