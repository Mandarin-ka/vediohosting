import { getKinopoiskMovie } from '@/API/kinopoisk/getKinopoiskMovie';
import { getKinopoiskMovies } from '@/API/kinopoisk/getKinopoiskMovies';
import { AxiosResponseMovies } from '@/types/axiosResponse';
import { Movie } from '@/types/movies';

const setStub = (
  data: Movie[],
  isNewPage: boolean,
  callback: (data: Movie[]) => void
) => {
  if (isNewPage) callback([...data, ...Array(16).fill(null)]);
  else callback(Array(16).fill(null));
};

export const loadDataByGenre = (
  data: Movie[],
  isNewPage: boolean,
  callback: (data: Movie[]) => void,
  params: { page?: number; genre: string } = { page: 1, genre: '' }
) => {
  setStub(data, isNewPage, callback);
  getKinopoiskMovies(params.page, params.genre).then(
    (response: AxiosResponseMovies) => {
      if (isNewPage) callback([...data, ...response.data.docs]);
      else callback(response.data.docs);
    }
  );
};

export const loadDataByQuery = (
  data: Movie[],
  isNewPage: boolean,
  callback: (data: Movie[]) => void,
  params: { page: number; query: string } = { page: 1, query: '' }
) => {
  setStub(data, isNewPage, callback);
  getKinopoiskMovie(params.page, params.query).then(
    (response: AxiosResponseMovies) => {
      if (isNewPage) callback([...data, ...response.data.docs]);
      else callback(response.data.docs);
    }
  );
};
