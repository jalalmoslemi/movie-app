import logo from '../../assets/icon/movie.png';
import style from './Logo.module.css';

function Logo() {
  return (
    <div className={style.logo}>
      <img src={logo} className="w-100 h-100" alt="" />
    </div>
  );
}

export default Logo;
