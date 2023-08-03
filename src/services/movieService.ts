import { AxiosRequestConfig } from 'axios';
import { FetchData } from '../utilities/FetchData';
import ApiService from './apiService';

class MovieService extends ApiService {
  constructor() {
    super();
  }

  getMovies = <T>(endpoint: string, config?: AxiosRequestConfig) => {
    return this.query.get<FetchData<T>>(endpoint, config).then(res => res.data);
  };
}

export default MovieService;
