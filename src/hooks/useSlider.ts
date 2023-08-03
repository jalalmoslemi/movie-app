import { useQuery } from '@tanstack/react-query';
import SliderService from '../services/sliderService';
import { FetchData } from '../utilities/FetchData';
import { Slider } from '../utilities/Slider';

export const useSlider = () => {
  const sliderService = new SliderService();

  return useQuery<FetchData<Slider[]>, Error>({
    queryKey: ['sliders'],
    queryFn: () => sliderService.getSliders<Slider[]>('/sliders'),
    retry: 0,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    networkMode: 'always',
  });
};
