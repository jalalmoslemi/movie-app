import { Link } from 'react-router-dom';
import { BASE_DOMAIN } from '../../utilities/Definds';
import movieIcon from '../../assets/icon/movie-large.png';

import {
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsGoogle,
  BsLinkedin,
  BsFacebook,
  BsTelegram,
} from 'react-icons/bs';
import style from './footer.module.css';

function Footer() {
  return (
    <footer
      className={style.footer + ' position-relative pb-5'}
      style={{
        backgroundImage: `url(${BASE_DOMAIN}/storage/images/footerBackground/dark-background-6.jpg)`,
      }}
    >
      <div className="container d-flex justify-content-center flex-wrap">
        <div
          className={
            style['footer-social-menu'] +
            ' d-flex flex-column justify-content-center'
          }
        >
          <h4>شبکه های اجتماعی</h4>
          <div className={style['line-blue']}></div>
          <ul className="navbar-nav flex-row flex-wrap justify-content-center">
            <li className={'nav-item ' + style.facebook}>
              <Link to={'/'} className="nav-link">
                <BsFacebook />
              </Link>
            </li>
            <li className={'nav-item ' + style.google}>
              <Link to={'/'} className="nav-link">
                <BsGoogle />
              </Link>
            </li>
            <li className={'nav-item ' + style.twitter}>
              <Link to={'/'} className="nav-link">
                <BsTwitter />
              </Link>
            </li>
            <li className={'nav-item ' + style.linkedin}>
              <Link to={'/'} className="nav-link">
                <BsLinkedin />
              </Link>
            </li>
            <li className={'nav-item ' + style.instagram}>
              <Link to={'/'} className="nav-link">
                <BsInstagram />
              </Link>
            </li>
            <li className={'nav-item ' + style.telegram}>
              <Link to={'/'} className="nav-link">
                <BsTelegram />
              </Link>
            </li>
            <li className={'nav-item ' + style.youtube}>
              <Link to={'/'} className="nav-link">
                <BsYoutube />
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={
            style['footer-icon'] +
            ' my-5 d-flex flex-column justify-content-center align-items-center'
          }
        >
          <img src={movieIcon} alt="" />
        </div>

        <div className={style['footer-menu'] + ' my-4 d-flex flex-column'}>
          <h4>دسترسی آسان</h4>
          <div className={style['line-blue']}></div>
          <ul className="navbar-nav d-flex flex-column">
            <li className="nav-item">
              <Link to={'/film'} className="nav-link nav-item-link">
                فیلم
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/tv-show'} className="nav-link nav-item-link">
                سریال
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/news'} className="nav-link nav-item-link">
                اخبار
              </Link>
            </li>
            <li className="nav-item">
              <button
                role="button"
                className="nav-link nav-item-link"
                data-bs-target="#ourModal"
                data-bs-toggle="modal"
              >
                تماس با ما
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="position-absolute text-center bottom-0 start-0 end-0 ">
        <span className="bg-danger d-inline-block rounded-top-1 px-3 text-center">
          تمام حقوق مادی و معنوی این سایت متعلق به جلال مسلمی می باشد
        </span>
      </div>
    </footer>
  );
}

export default Footer;
