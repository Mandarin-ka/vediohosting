import { useEffect, useState } from 'react';

import './App.scss';
import { getKinoPoiskMovies } from '@/API/getKinoPoiskMovies';
import { kinopoiskData } from '@/fakeData/kinopoiskMovies'; //TODO: Fake
import { Movie } from '@/types/movies';
import { AxiosResponse } from '@/types/axiosResponse';
import MovieCards from './MovieCards/MovieCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    // getKinoPoiskMovies().then((response: AxiosResponse) => {
    //   setMovies(response.data.docs);
    // });
    setMovies(kinopoiskData.docs); //TODO: Fake
  }, []);

  return <div>{movies && <MovieCards movies={movies} />}</div>;
}

export default App;
