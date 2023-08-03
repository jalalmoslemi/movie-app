import { FiMonitor } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import style from './filmTitle.module.css';

function TvShowTitle() {
  return (
    <div
      className={
        'd-flex justify-content-between align-items-center ' + style.title
      }
    >
      <div className="d-flex align-items-center">
        <span className="d-flex align-items-center">
          <FiMonitor />
        </span>
        <span className="me-3">سریال</span>
      </div>
      <div className="d-flex align-items-center my-2">
        <Link to={'tvshow'} className="btn btn-success">
          آرشیو کلی
        </Link>
      </div>
    </div>
  );
}

export default TvShowTitle;
