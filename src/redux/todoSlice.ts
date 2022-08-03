import { createSlice } from '@reduxjs/toolkit';
import { TodoState } from '../types/types';

const initialState = {
  todos: [
    { id: '31232', task: 'Wash the dishes Wash the dishes Wash the dishes Wash the dishes Wash the dishes ', isCompleted: false },
    { id: '31312332', task: 'Make the bed', isCompleted: false },
  ],
} as TodoState;

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
