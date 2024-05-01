import { useEffect, useState } from 'react';

import ErrorBoundary from './ErrorBoundaries/ErrorBoundaries';
import MovieCards from './MovieCards/MovieCards';
// import { getKinoPoiskMovies } from '@/API/getKinoPoiskMovies';
import { kinopoiskData } from '@/fakeData/kinopoiskMovies'; //TODO: Fake
// import { AxiosResponse } from '@/types/axiosResponse';
import { Movie } from '@/types/movies';
import Button from '@/ui/Button/Button';

import '@/styles/reset.scss';
import '@/styles/vars.scss';

function App() {
  const [movies, setMovies] = useState<Movie[] | null[]>(Array(16).fill(null));

  useEffect(() => {
    // getKinoPoiskMovies().then((response: AxiosResponse) => {
    //   setMovies(response.data.docs);
    // });
    setTimeout(
      () => setMovies(kinopoiskData.docs), //TODO: Fake
      1000
    );
  }, []);

  return (
    <ErrorBoundary>
      <div className='App'>
        <MovieCards movies={movies} />
        <Button text='Load More' onClick={() => console.log('click')} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
