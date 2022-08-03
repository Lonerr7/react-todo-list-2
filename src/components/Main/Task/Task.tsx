import s from './Task.module.scss';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

type TaskProps = {
  task: string;
  isCompleted: boolean;
};

const Task: React.FC<TaskProps> = ({ isCompleted, task }) => {
  return (
    <li className={s.task}>
      <div className={s.task__row}>
        {isCompleted ? (
          <button className={`${s.task__btn} ${s.task__completedBtn}`}>
            <BsToggleOn size={24} />
          </button>
        ) : (
          <button className={`${s.task__btn} ${s.task__completedBtn}`}>
            <BsToggleOff size={24} />
          </button>
        )}
        <p className={s.task__info}>{task}</p>
      </div>
      <div className={s.task__btns}>
        <button className={`${s.task__btn} ${s.task__editBtn}`}>
          <AiFillEdit size={24} />
        </button>
        <button className={`${s.task__btn} ${s.task__deleteBtn}`}>
          <MdDeleteForever size={24} />
        </button>
      </div>
    </li>
  );
};

export default Task;
