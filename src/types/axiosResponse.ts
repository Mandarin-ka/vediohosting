import { Genre } from './genres';
import { ResponseKiniopoisk } from './movies';

export interface AxiosResponseMovies {
  data: ResponseKiniopoisk;
  status: number;
  statusText: string;
}

export interface AxiosResponseGenre {
  data: Genre[];
  status: number;
  statusText: string;
}
