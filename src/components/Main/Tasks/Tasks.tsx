import { useAppSelector } from '../../../hooks/hooks';
import Task from '../Task/Task';
import s from './Tasks.module.scss';

const Tasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.todos.todos);

  const tasksElems = tasks.map((task) => (
    <Task key={task.id} isCompleted={task.isCompleted} task={task.task} />
  ));

  return <ul className={s.tasks}>{tasksElems}</ul>;
};

export default Tasks;
