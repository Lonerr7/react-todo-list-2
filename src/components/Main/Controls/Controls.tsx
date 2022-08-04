import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { changePopupOpen } from '../../../redux/popupSlice';
import s from './Controls.module.scss';

const Controls: React.FC = () => {
  const tasksCount = useAppSelector((state) => state.todos.todos).length;

  const dispatch = useAppDispatch();

  const popupOpenHandler = () => {
    if (!tasksCount) return;
    dispatch(changePopupOpen());
  };

  return (
    <div className={s.controls}>
      <div className={s.controls__btns}>
        <button className={s.controls__btn}>All</button>
        <button className={s.controls__btn}>Completed</button>
        <button className={s.controls__btn}>Uncompleted</button>
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
