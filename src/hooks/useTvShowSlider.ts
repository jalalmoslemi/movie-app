import { useQuery } from '@tanstack/react-query';
import SliderService from '../services/sliderService';
import { FetchData } from '../utilities/FetchData';
import { Movie } from '../utilities/Movie';

export const useTvShowSlider = () => {
  const sliderService = new SliderService();

  return useQuery<FetchData<Movie[]>, Error>({
    queryKey: ['tvShowSlider'],
    queryFn: () => sliderService.getSliders<Movie[]>('/tvshow-slider'),
    retry: 0,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    networkMode: 'always',
  });
};
