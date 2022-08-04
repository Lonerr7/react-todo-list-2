import { IoCloseCircle } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setErrorMessage } from '../../../redux/errorSlice';
import { closeErrorPopup } from '../../../redux/popupSlice';
import s from './ErrorPopup.module.scss';

const ErrorPopup = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.error.error);

  const closeErrorPopupHandler = () => {
    dispatch(closeErrorPopup());
    dispatch(setErrorMessage(''));
  };

  return (
    <div className={s.errorPopup}>
      <button
        className={s.errorPopup__btnClose}
        onClick={closeErrorPopupHandler}
      >
        <IoCloseCircle size={20} />
      </button>
      <div className={s.errorPopup__border}></div>
      <div className={s.errorPopup__textBox}>
        <p className={s.errorPopup__text}>{errorMessage}</p>
      </div>
    </div>
  );
};

export default ErrorPopup;
