import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setErrorMessage } from '../../../redux/errorSlice';
import { changeFilter } from '../../../redux/filtersSlice';
import { changePopupOpen } from '../../../redux/popupSlice';
import { Filters } from '../../../types/types';
import s from './Controls.module.scss';

const Controls: React.FC = () => {
  const tasksCount = useAppSelector((state) => state.todos.todos).length;
  const dispatch = useAppDispatch();

  const popupOpenHandler = () => {
    try {
      if (!tasksCount) throw new Error('Nothing to delete');
      dispatch(changePopupOpen());
    } catch (err: any) {
      dispatch(setErrorMessage(err.message));
    }
  };

  return (
    <div className={s.controls}>
      <div className={s.controls__btns}>
        <button
          className={s.controls__btn}
          onClick={() => dispatch(changeFilter(Filters.ALL))}
        >
          All
        </button>
        <button
          className={s.controls__btn}
          onClick={() => dispatch(changeFilter(Filters.COMPLETED))}
        >
          Completed
        </button>
        <button
          className={s.controls__btn}
          onClick={() => dispatch(changeFilter(Filters.UNCOMPLETED))}
        >
          Uncompleted
        </button>
      </div>
      <button
        className={`${s.controls__btn} ${s.controls__delete}`}
        onClick={popupOpenHandler}
      >
        Delete All
      </button>
    </div>
  );
};

export default Controls;
