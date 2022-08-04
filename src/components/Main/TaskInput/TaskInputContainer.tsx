import TaskInput from './TaskInput';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { setErrorMessage } from '../../../redux/errorSlice';
import { addTodo } from '../../../redux/todoSlice';
import { openErrorPopup } from '../../../redux/popupSlice';

const TaskInputContainer: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useAppDispatch();

  const addTaskHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      if (!taskText) throw new Error('Please enter your task');
      if (/^\s*$/.test(taskText)) throw new Error('Please enter a valid task');

      dispatch(addTodo(taskText.trim()));
      setTaskText('');
    } catch (err: any) {
      dispatch(setErrorMessage(err.message));
      dispatch(openErrorPopup());
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
