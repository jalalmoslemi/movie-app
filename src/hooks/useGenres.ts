import { useQuery } from '@tanstack/react-query';
import SliderService from '../services/sliderService';
import { Genres } from '../utilities/Genres';
import { FetchData } from '../utilities/FetchData';

const useGenres = () => {
  const genreSevice = new SliderService();

  return useQuery<FetchData<Genres>, Error>({
    queryKey: ['genres'],
    queryFn: () => genreSevice.getSliders<Genres>('/genres'),
    retry: 0,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    networkMode: 'always',
  });
};

export default useGenres;
