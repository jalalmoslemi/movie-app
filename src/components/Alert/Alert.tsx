import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './Alert.module.css';

import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { useAppSelector } from '../../hooks/store/selectorHook';
import { useDispatch } from 'react-redux';
import { alertAction } from '../../store/slices/alertSlice';

// interface Props {
//   success: boolean;
//   message: string;
// }
function Alert() {
  // const [showAlert, setShowAlert] = useState<boolean>(true);
  const alert = useAppSelector(state => state.alert);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setTimeout(() => setShowAlert(false), 5000);
  // }, []);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        dispatch(alertAction.hideAlert());
      }, 4000);
    };
  }, [alert.show]);

  if (alert.show)
    return (
      <>
        {ReactDOM.createPortal(
          <div
            className={
              style.alert + ' ' + (alert.success ? style.green : style.red)
            }
          >
            <p className="m-0">{alert.message}</p>
            {alert.success && <AiOutlineCheck />}
            {!alert.success && <RxCross1 />}
          </div>,
          document.querySelector('body') as HTMLElement
        )}
      </>
    );
  else return <></>;
}

export default Alert;

//{ success, message }: Props
