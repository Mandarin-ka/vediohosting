import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Page from '@pages/Page';

import * as styles from './App.module.scss';
import { getIMDbMovies } from '@/API/getIMDbMovies';
import { getKinoPoiskMovies } from '@/API/getKinoPoiskMovies';

function App() {
  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    getKinoPoiskMovies().then(async (response) => {
      const data = JSON.parse(await response.text());
      console.log(data);
      setMovies(data);
    });
  }, []);

  console.log(movies);
  movies;
  return (
    <div className={styles.block}>
      vivivi
      <div className={styles.temp}>element</div>
      <Page />
      <Outlet />
    </div>
  );
}

export default App;
