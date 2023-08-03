import { Link } from 'react-router-dom';
import useGenres from '../../../hooks/useGenres';

function Genres() {
  const { data: genres } = useGenres();

  return (
    <div className="container d-flex flex-wrap justify-content-center">
      <Link to={'/genre/animation'} className="btn btn-info m-2">
        <span className="ms-5">انیمیشن</span>
        <span>{genres?.data.animation}</span>
      </Link>
      <Link to={'/genre/history'} className="btn btn-primary m-2">
        <span className="ms-5">تاریخی</span>
        <span>{genres?.data.history}</span>
      </Link>
      <Link to={'/genre/horror'} className="btn btn-success m-2">
        <span className="ms-5">ترسناک</span>
        <span>{genres?.data.horror}</span>
      </Link>
      <Link to={'/genre/action'} className="btn btn-warning m-2">
        <span className="ms-5">اکشن</span>
        <span>{genres?.data.action}</span>
      </Link>
      <Link to={'/genre/crime'} className="btn btn-primary m-2">
        <span className="ms-5">جنایی</span>
        <span>{genres?.data.crime}</span>
      </Link>
      <Link to={'/genre/war'} className="btn btn-danger m-2">
        <span className="ms-5">جنگی</span>
        <span>{genres?.data.war}</span>
      </Link>
      <Link to={'/genre/family'} className="btn btn-info m-2">
        <span className="ms-5">خانوادگی</span>
        <span>{genres?.data.family}</span>
      </Link>
      <Link to={'/genre/drama'} className="btn btn-success m-2">
        <span className="ms-5">درام</span>
        <span>{genres?.data.drama}</span>
      </Link>
      <Link to={'/genre/biographical'} className="btn btn-primary m-2">
        <span className="ms-5">زندگی نامه</span>
        <span>{genres?.data.biographical}</span>
      </Link>
      <Link to={'/genre/romance'} className="btn btn-warning m-2">
        <span className="ms-5">عاشقانه</span>
        <span>{genres?.data.romance}</span>
      </Link>
      <Link to={'/genre/comedy'} className="btn btn-danger m-2">
        <span className="ms-5">کمدی</span>
        <span>{genres?.data.comedy}</span>
      </Link>
    </div>
  );
}

export default Genres;
