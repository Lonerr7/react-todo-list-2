import s from './TaskInput.module.scss';

const TaskInput: React.FC = () => {
  return (
    <form className={s.taskInput}>
      <input
        type="text"
        className={s.taskInput__input}
        placeholder="Add a task..."
      />
      <button className={s.taskInput__btn}>Create</button>
    </form>
  );
};

export default TaskInput;
