import { ResponseKiniopoisk } from './movies';

export interface AxiosResponse {
  data: ResponseKiniopoisk;
  status: number;
  statusText: string;
}
