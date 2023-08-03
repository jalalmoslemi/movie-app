import { Link } from 'react-router-dom';

import style from './FilmCard.module.css';

import imdb from '../../assets/icon/imdb-5977585.png';
import { Movie } from '../../utilities/Movie';
import { BASE_DOMAIN } from '../../utilities/Definds';

interface Props {
  film: Movie;
}

function FilmCard({ film }: Props) {
  return (
    <div className={style.item}>
      <Link to={`/single-movie/${film.id}`} className={style['film-item-link']}>
        <div className={style['film-item']}>
          <div className={style['film-item-header']}>
            <span>{film.title + ' (' + film.yearCreate + ')'}</span>
          </div>

          <div className={style['film-item-img'] + ' position-relative'}>
            <img
              src={BASE_DOMAIN + film.photo}
              alt=""
              className={'w-100 h-100 ' + style['img']}
            />
            <div
              className={
                style['film-story'] +
                ' position-absolute d-flex flex-column justify-content-center align-items-center opacity-0 top-0 end-0'
              }
            >
              <span className="color-blue-light">خلاصه ی داستان:</span>
              <span>{film.shortStory.slice(0, 100)}...</span>
            </div>
          </div>

          <div
            className={
              style['film-item-footer'] +
              ' d-flex justify-content-evenly align-items-center'
            }
          >
            <span className="mx-2 d-flex justify-content-center">
              <img src={imdb} alt="" className={style.imdb + ' me-3'} />
              <span className="me-1">{film.imdbRate}</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FilmCard;
