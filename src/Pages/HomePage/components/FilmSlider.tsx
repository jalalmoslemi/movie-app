import FilmCard from '../../../components/MovieCard/FilmCard';
import MultyItemSlider from '../../../components/MultyItemSlider';
import { useFilmSlider } from '../../../hooks/useFilmSlider';

function FilmSlider() {
  const { data: films } = useFilmSlider();

  return (
    <MultyItemSlider>
      {films?.data.map(item => (
        <FilmCard film={item} key={item.id} />
      ))}
    </MultyItemSlider>
  );
}

export default FilmSlider;

/*

*/
