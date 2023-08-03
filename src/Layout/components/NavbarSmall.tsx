import { Link } from 'react-router-dom';
import { FaFilm, FaNewspaper, FaUser } from 'react-icons/fa';
import { LuClapperboard } from 'react-icons/lu';

import Logo from './Logo';
import style from './NavbarSmall.module.css';
import { AiFillHome } from 'react-icons/ai';
import { User } from '../../utilities/User';
import { VscTriangleDown } from 'react-icons/vsc';
import { useState } from 'react';
import DropDownSmall from './DropDownSmall';

interface Props {
  showNavSmall: boolean;
  user: User;
}

function NavbarSmall({ user, showNavSmall }: Props) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <div className={style.menu + (showNavSmall ? ' ' + style.isActive : '')}>
      <Logo />
      <p className="mb-4">دانلود فیلم و سریال</p>

      {user.email && (
        <div className="position-relative">
          <button
            className={'btn bg-blue ' + style.dropdown}
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <span className="ms-3">
              <FaUser />
              <span className="me-2">{user.name + ' ' + user.lastName}</span>
            </span>

            <span
              className={
                style.arrow + (showDropDown ? ' ' + style.arrowActive : '')
              }
            >
              <VscTriangleDown />
            </span>
          </button>
          {showDropDown && <DropDownSmall admin={user.isAdmin} />}
        </div>
      )}

      {!user.email && (
        <Link className="btn bg-blue w-100" to={'login'}>
          ورود
        </Link>
      )}
      <hr />

      <ul className={'p-0 ' + style.menuList}>
        <li>
          <span className="ms-3">
            <AiFillHome />
          </span>
          <Link to={'/'}>صفحه‌ی اصلی</Link>
        </li>
        <li>
          <span className="ms-3">
            <FaFilm />
          </span>
          <Link to={'/film'}>فیلم</Link>
        </li>
        <li>
          <span className="ms-3">
            <LuClapperboard />
          </span>
          <Link to={''}>سریال</Link>
        </li>
        <li>
          <span className="ms-3">
            <FaNewspaper />
          </span>
          <Link to={''}>اخبار</Link>
        </li>
        <li>
          <button className={'btn btn-success ' + style.btn}>تماس با ما</button>
        </li>
      </ul>
    </div>
  );
}

export default NavbarSmall;
