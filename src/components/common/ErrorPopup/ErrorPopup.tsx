import { IoCloseCircle } from 'react-icons/io5';
import { useAppDispatch } from '../../../hooks/hooks';
import { deleteErrorMessage } from '../../../redux/errorSlice';
import s from './ErrorPopup.module.scss';

type ErrorPopupProps = {
  errMessage: string;
  id: string;
};

const ErrorPopup: React.FC<ErrorPopupProps> = ({ errMessage, id }) => {
  const dispatch = useAppDispatch();

  const closeErrorPopupHandler = () => {
    dispatch(deleteErrorMessage(id));
  };

  return (
    <li className={s.errorPopup}>
      <button
        className={s.errorPopup__btnClose}
        onClick={closeErrorPopupHandler}
      >
        <IoCloseCircle size={20} />
      </button>
      <div className={s.errorPopup__border}></div>
      <div className={s.errorPopup__textBox}>
        <p className={s.errorPopup__text}>{errMessage}</p>
      </div>
    </li>
  );
};

export default ErrorPopup;
