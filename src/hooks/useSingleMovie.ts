import { useMutation, useQuery } from '@tanstack/react-query';
import SingleMovieService from '../services/singleMovieService';
import { FetchData } from '../utilities/FetchData';
import { Movie } from '../utilities/Movie';
import Comment from '../utilities/Comment';

const useSingleMovie = (id: string) => {
  const singleMovieService = new SingleMovieService();

  return useQuery<FetchData<Movie>, Error>({
    queryKey: ['single-movie', { id: id }],
    queryFn: () => singleMovieService.getMovies<Movie>('/single-movie', id),
    retry: 0,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    networkMode: 'always',
  });
};

export const useMovieComment = (id: number) => {
  const singleMovieService = new SingleMovieService();

  return useQuery<FetchData<Comment[]>, Error>({
    queryKey: ['comment', { id: id }],
    queryFn: () =>
      singleMovieService.getAllCommentsOfMovie<Comment[]>(
        '/single-movie/comment',
        id.toString()
      ),
    retry: 0,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    networkMode: 'always',
  });
};

export default useSingleMovie;

export const useComment = () => {
  const singleMovieService = new SingleMovieService();

  return useMutation({
    mutationKey: ['saveComment'],
    mutationFn: (data: { comment: string; movieId: number; userId: number }) =>
      singleMovieService.saveComment('/comment', data),
    networkMode: 'always',
  });
};
