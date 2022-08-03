import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TodoState } from '../types/types';

const initialState = {
  todos: [
    {
      id: '31232',
      task: 'Wash the dishes Wash the dishes Wash the dishes Wash the dishes Wash the dishes ',
      isCompleted: false,
    },
    { id: '31312332', task: 'Make the bed', isCompleted: false },
  ],
} as TodoState;

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: nanoid(12),
        task: action.payload,
        isCompleted: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
