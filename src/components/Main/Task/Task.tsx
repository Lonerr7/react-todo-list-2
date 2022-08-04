import s from './Task.module.scss';
import TaskControls from './TaskControls/TaskControls';
import TaskInfo from './TaskInfo/TaskInfo';

type TaskProps = {
  task: string;
  isCompleted: boolean;
  id: string;
  editMode: boolean;
  editTaskText: string;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  onTaskComplete: (id: string) => void;
  onTaskDelete: (id: string) => void;
  setEditMode: () => void;
};

const Task: React.FC<TaskProps> = ({
  isCompleted,
  task,
  id,
  editMode,
  editTaskText,
  setEditTaskText,
  onTaskComplete,
  onTaskDelete,
  setEditMode,
}) => {
  return (
    <li className={s.task}>
      <TaskInfo
        editMode={editMode}
        id={id}
        isCompleted={isCompleted}
        onTaskComplete={onTaskComplete}
        task={task}
        setEditMode={setEditMode}
        editTaskText={editTaskText}
        setEditTaskText={setEditTaskText}
      />
      <TaskControls
        id={id}
        editMode={editMode}
        onTaskDelete={onTaskDelete}
        setEditMode={setEditMode}
        task={task}
        setEditTaskText={setEditTaskText}
      />
    </li>
  );
};

export default Task;
