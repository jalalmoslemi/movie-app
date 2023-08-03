import { AiFillHeart } from 'react-icons/ai';
import { FaFaceGrinSquintTears } from 'react-icons/fa6';
import { GiPistolGun } from 'react-icons/gi';
import style from './GenreTitle.module.css';

function GenreTitle() {
  return (
    <div className={style.title + ' d-flex align-items-center'}>
      <div className="d-flex align-items-center">
        <span className="d-flex align-items-center">
          <span className={style.red}>
            <AiFillHeart />
          </span>

          <span className={style.yellow}>
            <FaFaceGrinSquintTears />
          </span>
          <span className={style.blue}>
            <GiPistolGun />
          </span>
        </span>
        <span className="me-3">ژانر</span>
      </div>
    </div>
  );
}

export default GenreTitle;
