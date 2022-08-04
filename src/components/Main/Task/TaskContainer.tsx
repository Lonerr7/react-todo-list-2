import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { toggleIsCompleted, deleteTodo } from '../../../redux/todoSlice';
import Task from './Task';

type TaskProps = {
  task: string;
  isCompleted: boolean;
  id: string;
};

const TaskContainer: React.FC<TaskProps> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editTaskText, setEditTaskText] = useState(props.task);
  const dispatch = useAppDispatch();

  const taskCompleteHanlder = (id: string) => {
    dispatch(toggleIsCompleted(id));
  };

  const taskDeleteHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const toggleEditModeHandler = () => {
    setEditMode(!editMode);
  };

  return (
    <Task
      {...props}
      editMode={editMode}
      editTaskText={editTaskText}
      setEditTaskText={setEditTaskText}
      onTaskComplete={taskCompleteHanlder}
      onTaskDelete={taskDeleteHandler}
      setEditMode={toggleEditModeHandler}
    />
  );
};

export default TaskContainer;
