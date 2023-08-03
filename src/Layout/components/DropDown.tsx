import { BiSupport } from 'react-icons/bi';
import { FaRegCommentDots, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAction } from '../../store/slices/userSlice';
import style from './dropDown.module.css';
import { alertAction } from '../../store/slices/alertSlice';

interface Props {
  admin?: boolean;
}
function DropDown({ admin }: Props) {
  const dispatch = useDispatch();

  function exitUser() {
    dispatch(userAction.logout());
    dispatch(
      alertAction.showAlert({
        message: 'با موفقیت خارج شدید',
        success: false,
        show: true,
      })
    );
  }

  return (
    <ul className={'position-absolute ' + style.dropdown}>
      <li>
        <Link to={''}>
          <FaUser />
          <span>پروفایل</span>
        </Link>
      </li>
      <li>
        <Link to={''}>
          <FaShoppingCart />
          <span>خرید اشتراک</span>
        </Link>
      </li>
      <li>
        <Link to={''}>
          <FaRegCommentDots />
          <span>نظرات</span>
        </Link>
      </li>
      {admin === true && (
        <li>
          <Link to={'admin'}>
            <BiSupport />
            <span>ادمین داشبورد</span>
          </Link>
        </li>
      )}
      <button
        className={'btn btn-danger ' + style.exit}
        onClick={exitUser}
        role="button"
      >
        <span>خروج</span>
      </button>
    </ul>
  );
}

export default DropDown;
