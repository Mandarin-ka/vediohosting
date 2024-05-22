import { useEffect, useState } from 'react';

import { getKinopoiskGenres } from '@/API/kinopoisk/getKinopoiskGenres';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { movieSlice } from '@/store/reducers/MovieReducer';
import { AxiosResponseGenre } from '@/types/axiosResponse';
import { Genre } from '@/types/genres';
import GenreButton from '@/ui/Buttons/GenreButton/GenreButton';

import * as styles from './ControlPanel.module.scss';

function ControlPanel({
  genre,
  setGenre,
}: {
  genre: string;
  setGenre: (genre: string) => void;
}) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const { movieFetchingSuccess } = movieSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    getKinopoiskGenres().then((response: AxiosResponseGenre) => {
      console.log(response);
      setGenres(response.data);
    });
  }, []);

  const toggleGenre = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const value = (e.target as HTMLElement).textContent;
    setGenre(value.toLowerCase() === 'все' ? '' : value);
    dispatch(movieFetchingSuccess([]));
  };

  return (
    <div className={styles.panel}>
      <GenreButton
        text={'Все'}
        onClick={toggleGenre}
        className={genre === '' ? 'active' : ''}
      />
      {genres.map((e: Genre, i: number) => (
        <GenreButton
          key={e.name + i}
          text={e.name}
          onClick={toggleGenre}
          className={genre === e.name ? 'active' : ''}
        />
      ))}
    </div>
  );
}

export default ControlPanel;
