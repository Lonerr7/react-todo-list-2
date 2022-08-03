import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { addTodo } from '../../../redux/todoSlice';
import s from './TaskInput.module.scss';

const TaskInput: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useAppDispatch();

  const addTaskHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!taskText || /^\s*$/.test(taskText)) return;
    dispatch(addTodo(taskText));
    setTaskText('');
  };

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
