import s from './DeletePopup.module.scss';
import { IoCloseCircle } from 'react-icons/io5';
import { useAppDispatch } from '../../../hooks/hooks';
import { changePopupOpen } from '../../../redux/popupSlice';
import { deleteAllTodos } from '../../../redux/todoSlice';
import Container from '../../common/Container/Container';

const DeletePopup: React.FC = () => {
  const dispatch = useAppDispatch();

  const closePopupHandler = () => {
    dispatch(changePopupOpen());
  };

  const deleteAllTodosHandler = () => {
    dispatch(deleteAllTodos());
    dispatch(changePopupOpen());
  };

  return (
    <div className={s.deletePopup}>
      <button
        className={`${s.deletePopup__btn} ${s.deletePopup__close}`}
        onClick={closePopupHandler}
      >
        <IoCloseCircle size={24} />
      </button>
      <div className={s.deletePopup__block}>
        <p className={s.deletePopup__title}>
          Do you want to delete all your tasks?
        </p>
        <div className={s.deletePopup__btns}>
          <button
            className={`${s.deletePopup__btn} ${s.deletePopup__yes}`}
            onClick={deleteAllTodosHandler}
          >
            Yes
          </button>
          <button
            className={`${s.deletePopup__btn} ${s.deletePopup__no}`}
            onClick={closePopupHandler}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
