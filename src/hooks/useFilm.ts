import { useQuery } from '@tanstack/react-query';
import MovieService from '../services/movieService';
import { FetchData } from '../utilities/FetchData';
import { Movie } from '../utilities/Movie';
import Paginate from '../utilities/Paginate';

const useFilm = (page: number, pageSize: number) => {
  const filmService = new MovieService();

  return useQuery<FetchData<Paginate<Movie>>, Error>({
    queryKey: ['films', { page: page, pageSize: pageSize }],
    queryFn: () =>
      filmService.getMovies<Paginate<Movie>>('/film', {
        params: {
          page: page,
          pageSize: pageSize,
        },
      }),
    retry: 0,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    networkMode: 'always',
  });
};

export default useFilm;
