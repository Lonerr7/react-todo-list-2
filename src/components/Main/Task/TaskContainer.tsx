import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { toggleIsCompleted } from '../../../redux/todoSlice';
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

  return <Task {...props} onTaskComplete={taskCompleteHanlder} />;
};

export default TaskContainer;
