import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Page from '@pages/Page';
import Page3 from '@utils/Page3';

import * as styles from './App.module.scss';
import { getIMDbMovies } from '@/API/getIMDbMovies';

function App() {
  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    getIMDbMovies().then(async (data) =>
      setMovies(JSON.parse(await data.text()))
    );
  }, []);

  console.log(movies);
  movies;
  return (
    <div className={styles.block}>
      vivivi
      <div className={styles.temp}>element</div>
      <Page />
      <Page3 />
      <Outlet />
    </div>
  );
}

export default App;
