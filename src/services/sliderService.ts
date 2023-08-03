import { FetchData } from '../utilities/FetchData';
import ApiService from './apiService';

class SliderService extends ApiService {
  constructor() {
    super();
  }
  getSliders = <T>(endpoint: string) => {
    return this.query.get<FetchData<T>>(endpoint).then(res => res.data);
  };
}

export default SliderService;
