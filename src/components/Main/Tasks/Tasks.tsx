import { useAppSelector } from '../../../hooks/hooks';
import TaskContainer from '../Task/TaskContainer';
import s from './Tasks.module.scss';

const Tasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.todos.todos);

  const tasksElems = tasks.map((task) => (
    <TaskContainer
      key={task.id}
      isCompleted={task.isCompleted}
      task={task.task}
      id={task.id}
    />
  ));

  return <ul className={s.tasks}>{tasksElems}</ul>;
};

export default Tasks;
