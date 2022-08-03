import s from './Controls.module.scss';

const Controls: React.FC = () => {
  return (
    <div className={s.controls}>
      <div className={s.controls__btns}>
        <button className={s.controls__btn}>All</button>
        <button className={s.controls__btn}>Completed</button>
        <button className={s.controls__btn}>Uncompleted</button>
      </div>
      <button className={`${s.controls__btn} ${s.controls__delete}`}>
        Delete All
      </button>
    </div>
  );
};

export default Controls;
