import { useEffect, useState } from 'react';

import '@/styles/reset.scss';
import '@/styles/vars.scss';
import { getKinoPoiskMovies } from '@/API/getKinoPoiskMovies';
import { kinopoiskData } from '@/fakeData/kinopoiskMovies'; //TODO: Fake
import { Movie } from '@/types/movies';
import { AxiosResponse } from '@/types/axiosResponse';
import MovieCards from './MovieCards/MovieCards';

function App() {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    // getKinoPoiskMovies().then((response: AxiosResponse) => {
    //   setMovies(response.data.docs);
    // });
    setMovies(kinopoiskData.docs); //TODO: Fake
  }, []);

  return <div className='App'>{movies && <MovieCards movies={movies} />}</div>;
}

export default App;
