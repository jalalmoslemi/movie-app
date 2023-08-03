import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { VscTriangleDown } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store/selectorHook';
import BurgerMenu from '../components/BurgerMenu';
import DropDown from '../components/DropDown';
import Logo from '../components/Logo';
import NavbarSmall from '../components/NavbarSmall';
import NavbarWide from '../components/NavbarWide';
import style from './header.module.css';

function Header() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [showNavSmall, setShowNavSmall] = useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const user = useAppSelector(state => state.user);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, []);

  return (
    <>
      <header className={style['header-bgfix'] + ' ' + style.header}>
        <div className="d-flex align-items-center">
          <Logo />
          {width >= 992 && <NavbarWide />}
        </div>
        {width >= 992 && !user.email && (
          <div>
            {' '}
            <Link to={'login'} className={'btn px-4 ' + style.btnUser}>
              ورود
            </Link>
            <Link to={'signup'} className={'btn px-4 ' + style.btnUserSignup}>
              ثبت نام
            </Link>
          </div>
        )}

        {width >= 992 && user.email && (
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
            {showDropDown && <DropDown admin={user.isAdmin} />}
          </div>
        )}

        {width < 992 && (
          <BurgerMenu
            showNavSmall={showNavSmall}
            setShowNavSmall={() => setShowNavSmall(!showNavSmall)}
          />
        )}
      </header>
      {width < 992 && <NavbarSmall user={user} showNavSmall={showNavSmall} />}
    </>
  );
}

export default Header;

//
