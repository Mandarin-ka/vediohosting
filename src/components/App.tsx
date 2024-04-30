import { useEffect, useState } from 'react';

import '@/styles/reset.scss';
import '@/styles/vars.scss';
import { getKinoPoiskMovies } from '@/API/getKinoPoiskMovies';
import { kinopoiskData } from '@/fakeData/kinopoiskMovies'; //TODO: Fake
import { Movie } from '@/types/movies';
import { AxiosResponse } from '@/types/axiosResponse';
import MovieCards from './MovieCards/MovieCards';
import ErrorBoundary from './ErrorBoundaries/ErrorBoundaries';
import Skeleton from '@/ui/skeleton/Skeleton';

function App() {
  const [movies, setMovies] = useState<Movie[] | null[]>(Array(16).fill(null));

  useEffect(() => {
    // getKinoPoiskMovies().then((response: AxiosResponse) => {
    //   setMovies(response.data.docs);
    // });
    setTimeout(
      () => setMovies(kinopoiskData.docs), //TODO: Fake
      2000
    );
  }, []);

  return (
    <ErrorBoundary>
      <div className='App'>
        <MovieCards movies={movies} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
