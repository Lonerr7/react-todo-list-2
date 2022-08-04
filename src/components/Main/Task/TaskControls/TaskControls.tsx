import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import s from '../Task.module.scss';

type TaskControlsProps = {
  id: string;
  task: string;
  editMode: boolean;
  setEditMode: () => void;
  onTaskDelete: (id: string) => void;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
};

const TaskControls: React.FC<TaskControlsProps> = ({
  id,
  task,
  editMode,
  setEditMode,
  onTaskDelete,
  setEditTaskText,
}) => {
  const toggleEditModeHandler = () => {
    if (editMode) setEditTaskText(task);
    setEditMode();
  };

  return (
    <div className={s.task__btns}>
      <button
        className={`${s.task__btn} ${s.task__editBtn}`}
        onClick={toggleEditModeHandler}
      >
        <AiFillEdit size={24} />
      </button>
      <button
        className={`${s.task__btn} ${s.task__deleteBtn}`}
        onClick={() => onTaskDelete(id)}
      >
        <MdDeleteForever size={24} />
      </button>
    </div>
  );
};

export default TaskControls;
