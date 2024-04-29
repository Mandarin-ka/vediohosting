import { ResponseKiniopoisk } from './movies';

export interface AxiosResponse {
  config?: any;
  data: ResponseKiniopoisk;
  headers?: any;
  request?: any;
  status: number;
  statusText: string;
}
