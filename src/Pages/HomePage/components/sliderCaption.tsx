import style from './sliderCaption.module.css';
import imdb from '../../../assets/icon/imdb-5977585.png';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  yearCreate: number;
  imdbRate: number;
  shortStory: string;
  id: number;
}

function SliderCaption({ id, title, yearCreate, imdbRate, shortStory }: Props) {
  return (
    <div className={style.caption}>
      <p className={style.title}>{title + ' (' + yearCreate + ')'}</p>
      <div>
        <img src={imdb} alt="" />
        <span>{imdbRate}</span>
      </div>
      <p className="d-none d-md-block">
        <span className="text-primary">خلاصه ی داستان: </span>
        <span>{shortStory.slice(0, 100) + '...'}</span>
      </p>
      <Link className="btn btn-danger" to={`/single-movie/${id}/id`}>
        دانلود
      </Link>
    </div>
  );
}

export default SliderCaption;
