import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Laoding from '../../components/Loading';
import useSingleMovie from '../../hooks/useSingleMovie';
import { BASE_DOMAIN } from '../../utilities/Definds';
import style from './SingleMovie.module.css';
import MovieCommentBox from './components/MovieCommentBox';
import MovieDownloadBox from './components/MovieDownloadBox';

function SingleMoviePage() {
  const param = useParams<{ id: string }>();
  const location = useLocation();
  const [showComment, setShowComment] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname.split('/')[3] === 'comment') {
      setShowComment(true);
    } else {
      setShowComment(false);
    }
  }, [location.pathname.split('/')[3]]);

  if (param.id === undefined) return <></>;
  const { data: movie, isLoading, isError } = useSingleMovie(param.id);

  if (isError) {
    throw new Error('متاسفانه به مشکلی برخوردید');
  }
  if (isLoading) {
    return <Laoding />;
  }

  const genres: string[] = [];
  if (movie.data.genres) genres.push(...Object.keys(movie.data.genres));

  return (
    <div className={style.box}>
      <section>
        <div className={style['single-film-title']}>
          <span>{movie.data.title + ' (' + movie.data.yearCreate + ')'}</span>
        </div>
        <div className="line-blue"></div>

        <div className="container">
          <div className={style['single-film-info'] + ' d-flex flex-wrap'}>
            <div className={style['single-film-img']}>
              <img src={BASE_DOMAIN + movie.data.photo} alt="" />
            </div>

            <ul className="list-group rounded-0 p-0">
              <li className="list-unstyled">
                <p className="t-color-lightblack m-0">محصول کشور:</p>
                <p>{movie.data.madeIn}</p>
              </li>
              <li className="list-unstyled">
                <p className="t-color-lightblack m-0">زبان:</p>
                <p>{movie.data.language}</p>
              </li>
              <li className="list-unstyled">
                <p className="t-color-lightblack m-0">سال انتشار:</p>
                <p>{movie.data.yearCreate}</p>
              </li>
              <li className="list-unstyled">
                <p className="t-color-lightblack m-0">امتیاز imdb:</p>
                <p>{movie.data.imdbRate}</p>
              </li>
            </ul>

            <ul className="list-group p-0">
              <li className="list-unstyled">
                <p className="t-color-lightblack m-0">ژانر:</p>

                {genres.map((key: string, idx) => (
                  <div
                    key={idx}
                    className={'btn m-2 ' + style['single-genre-item']}
                  >
                    <span className="px-3">{movie.data.genres![key]}</span>
                  </div>
                ))}
              </li>

              <li className="list-unstyled mt-2">
                <p className="t-color-lightblack m-0">رده سنی:</p>
                <p>{movie.data.ageRate}</p>
              </li>
            </ul>
          </div>

          <div className={style['single-film-info2']}>
            <div className={style['star-rating']}>
              <div className={style['stars'] + ' text-center'}>
                <a>&#9734;</a>
                <a>&#9734;</a>
                <a>&#9734;</a>
                <a>&#9734;</a>
                <a>&#9734;</a>
                <a>&#9734;</a>
                <a>&#9734;</a>
                <a>&#9734;</a>
                <a>&#9734;</a>
                <a>&#9734;</a>
              </div>
              <div className="rate text-center">
                <span>8.6</span>
                <span>(123)</span>
              </div>
            </div>

            <div className={style['single-film-discribtion'] + ' text-center'}>
              <span className="color-blue-light">خلاصه ی داستان:</span>
              <span>{movie.data.shortStory}</span>
            </div>
          </div>
        </div>
      </section>

      {/*
      *
      *
      *
      *
      *
      *
          


  */}

      <section className={style['single-film-body']}>
        <ul className="nav nav-tabs">
          <li className="nav-item text-center w-50">
            <Link
              className={
                'btn ' + style.btn + ' ' + (showComment ? '' : style.active)
              }
              to={`/single-movie/${param.id}`}
            >
              دانلود
            </Link>
          </li>
          <li className="nav-item text-center w-50">
            <Link
              className={
                'btn ' + style.btn + ' ' + (showComment ? style.active : '')
              }
              to={`/single-movie/${param.id}/comment`}
            >
              نظرات
            </Link>
          </li>
        </ul>

        {showComment === false && <MovieDownloadBox />}
        {showComment && <MovieCommentBox id={movie.data.id} />}
      </section>
    </div>
  );
}

export default SingleMoviePage;
