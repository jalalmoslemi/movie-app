import { NavLink } from 'react-router-dom';

import style from './NavbarWide.module.css';
import { Fragment, useState } from 'react';
import ModalView from '../../components/Modal/Modal';

function NavbarWide() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Fragment>
      <ul className={style.nav + ' m-0'}>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            صفحه‌ی اصلی
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'film'}
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            فیلم
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'tv-show'}
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            سریال
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'news'}
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            اخبار
          </NavLink>
        </li>
        <li>
          <button
            className={'btn btn-success'}
            onClick={() => setShowModal(true)}
          >
            تماس با ما
          </button>
        </li>
      </ul>

      {showModal && (
        <ModalView show={showModal} closeModal={() => setShowModal(false)} />
      )}
    </Fragment>
  );
}

export default NavbarWide;
