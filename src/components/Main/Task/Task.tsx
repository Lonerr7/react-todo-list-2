import s from './Task.module.scss';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

type TaskProps = {
  task: string;
  isCompleted: boolean;
  id: string;
  onTaskComplete: (id: string) => void;
  onTaskDelete: (id: string) => void;
};

const Task: React.FC<TaskProps> = ({
  isCompleted,
  task,
  id,
  onTaskComplete,
  onTaskDelete
}) => {
  return (
    <li className={s.task}>
      <div className={s.task__row}>
        <button
          className={`${s.task__btn} ${s.task__completedBtn}`}
          onClick={() => onTaskComplete(id)}
        >
          {isCompleted ? <BsToggleOn size={24} /> : <BsToggleOff size={24} />}
        </button>
        <p
          className={
            isCompleted ? `${s.task__info} ${s.completed}` : s.task__info
          }
          onClick={() => onTaskComplete(id)}
        >
          {task}
        </p>
      </div>
      <div className={s.task__btns}>
        <button className={`${s.task__btn} ${s.task__editBtn}`}>
          <AiFillEdit size={24} />
        </button>
        <button className={`${s.task__btn} ${s.task__deleteBtn}`} onClick={() => onTaskDelete(id)}>
          <MdDeleteForever size={24} />
        </button>
      </div>
    </li>
  );
};

export default Task;
