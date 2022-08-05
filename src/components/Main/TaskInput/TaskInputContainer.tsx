import TaskInput from './TaskInput';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { addTodo } from '../../../redux/todoSlice';
import { setErrorMessage } from '../../../redux/errorSlice';

const TaskInputContainer: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useAppDispatch();

  const addTaskHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      if (!taskText) throw new Error('Please enter your task');
      if (/^\s*$/.test(taskText)) throw new Error('Please enter a valid task');

      dispatch(addTodo(taskText));
      setTaskText('');
    } catch (err: any) {
      dispatch(setErrorMessage(err.message));
    }
  };

  return (
    <TaskInput
      addTaskHandler={addTaskHandler}
      setTaskText={setTaskText}
      taskText={taskText}
    />
  );
};

export default TaskInputContainer;
