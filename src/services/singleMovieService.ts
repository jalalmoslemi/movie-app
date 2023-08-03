import { FetchData } from '../utilities/FetchData';
import ApiService from './apiService';

class SingleMovieService extends ApiService {
  constructor() {
    super();
  }

  getMovies = <T>(endpoint: string, id: string) => {
    return this.query
      .get<FetchData<T>>(endpoint + '/' + id)
      .then(res => res.data);
  };

  getAllCommentsOfMovie = <T>(endpoint: string, id: string) => {
    return this.query
      .get<FetchData<T>>(endpoint + '/' + id)
      .then(res => res.data);
  };

  saveComment = (
    endpoint: string,
    data: { comment: string; movieId: number; userId: number }
  ) => {
    return this.query.post<FetchData<[]>>(endpoint, data).then(res => res.data);
  };
}

export default SingleMovieService;
