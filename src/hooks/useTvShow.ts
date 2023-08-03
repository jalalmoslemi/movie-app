import { useQuery } from '@tanstack/react-query';
import MovieService from '../services/movieService';
import { FetchData } from '../utilities/FetchData';
import { Movie } from '../utilities/Movie';
import Paginate from '../utilities/Paginate';

const useTvShow = (page: number) => {
  const filmService = new MovieService();

  return useQuery<FetchData<Paginate<Movie>>, Error>({
    queryKey: ['tvShow', { page: page }],
    queryFn: () =>
      filmService.getMovies<Paginate<Movie>>('/tvshow', {
        params: {
          page: page,
          pageSize: 2,
        },
      }),
    retry: 0,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    networkMode: 'always',
  });
};

export default useTvShow;
