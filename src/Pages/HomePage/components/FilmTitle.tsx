import { LuClapperboard } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import style from './filmTitle.module.css';
function FilmTitle() {
  return (
    <div
      className={
        'd-flex justify-content-between align-items-center ' + style.title
      }
    >
      <div className="d-flex align-items-center">
        <span className="d-flex align-items-center">
          <LuClapperboard />
        </span>
        <span className="me-3">فیلم</span>
      </div>
      <div className="d-flex align-items-center my-2">
        <Link to={'film'} className="btn btn-success">
          آرشیو کلی
        </Link>
      </div>
    </div>
  );
}

export default FilmTitle;
