import s from './TaskInput.module.scss';

type TaskInputProps = {
  taskText: string;
  setTaskText: React.Dispatch<React.SetStateAction<string>>;
  addTaskHandler: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const TaskInput: React.FC<TaskInputProps> = ({
  addTaskHandler,
  setTaskText,
  taskText,
}) => {
  return (
    <form className={s.taskInput}>
      <input
        type="text"
        className={s.taskInput__input}
        placeholder="Add a task..."
        value={taskText}
        onChange={(e) => {
          setTaskText(e.target.value);
        }}
      />
      <button className={s.taskInput__btn} onClick={addTaskHandler}>
        Create
      </button>
    </form>
  );
};

export default TaskInput;
