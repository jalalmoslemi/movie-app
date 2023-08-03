import FilmCard from '../../../components/MovieCard/FilmCard';
import MultyItemSlider from '../../../components/MultyItemSlider';
import { useTvShowSlider } from '../../../hooks/useTvShowSlider';

function TvShowSlider() {
  const { data: tvShows } = useTvShowSlider();
  return (
    <MultyItemSlider>
      {tvShows?.data.map(item => (
        <FilmCard film={item} key={item.id} />
      ))}
    </MultyItemSlider>
  );
}

export default TvShowSlider;
