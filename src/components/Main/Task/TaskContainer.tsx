import { useAppDispatch } from '../../../hooks/hooks';
import { toggleIsCompleted, deleteTodo } from '../../../redux/todoSlice';
import Task from './Task';

type TaskProps = {
  task: string;
  isCompleted: boolean;
  id: string;
};

const TaskContainer: React.FC<TaskProps> = (props) => {
  const dispatch = useAppDispatch();

  const taskCompleteHanlder = (id: string) => {
    dispatch(toggleIsCompleted(id));
  };

  const taskDeleteHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Task
      {...props}
      onTaskComplete={taskCompleteHanlder}
      onTaskDelete={taskDeleteHandler}
    />
  );
};

export default TaskContainer;
