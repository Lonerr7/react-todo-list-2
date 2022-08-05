import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { useAppDispatch } from '../../../../hooks/hooks';
import { setErrorMessage } from '../../../../redux/errorSlice';
import { changeTaskText } from '../../../../redux/todoSlice';
import s from './TaskInfo.module.scss';

type TaskInfoProps = {
  editMode: boolean;
  id: string;
  isCompleted: boolean;
  task: string;
  editTaskText: string;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  onTaskComplete: (id: string) => void;
  setEditMode: () => void;
};

const TaskInfo: React.FC<TaskInfoProps> = ({
  editMode,
  id,
  isCompleted,
  task,
  editTaskText,
  setEditTaskText,
  onTaskComplete,
  setEditMode,
}) => {
  const dispatch = useAppDispatch();

  const onTaskTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEditTaskText(e.currentTarget.value);
  };

  const onNewTaskTextSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      if (!editTaskText) throw new Error('Please enter your task');
      if (/^\s*$/.test(editTaskText)) {
        throw new Error('Please enter a valid task');
      }

      dispatch(changeTaskText({ id, newText: editTaskText.trim() }));
      setEditMode();
    } catch (err: any) {
      dispatch(setErrorMessage(err.message));
    }
  };

  return (
    <>
      {editMode ? (
        <div className={s.taskInfo__edit}>
          <form className={s.taskInfo__editForm}>
            <input
              className={s.taskInfo__input}
              type="text"
              value={editTaskText}
              onChange={onTaskTextChange}
            />
            <button
              className={`${s.taskInfo__btn} ${s.taskInfo__okBtn}`}
              onClick={onNewTaskTextSubmit}
            >
              <MdOutlineDoneOutline size={24} />
            </button>
          </form>
        </div>
      ) : (
        <div className={s.taskInfo__row}>
          <button
            className={`${s.taskInfo__btn} ${s.taskInfo__completedBtn}`}
            onClick={() => onTaskComplete(id)}
          >
            {isCompleted ? <BsToggleOn size={24} /> : <BsToggleOff size={24} />}
          </button>
          <p
            className={
              isCompleted
                ? `${s.taskInfo__info} ${s.completed}`
                : s.taskInfo__info
            }
            onClick={() => onTaskComplete(id)}
          >
            {task}
          </p>
        </div>
      )}
    </>
  );
};

export default TaskInfo;
