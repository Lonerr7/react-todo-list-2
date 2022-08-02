import { createSlice } from '@reduxjs/toolkit';
import { TodoState } from '../types/types';

const initialState = {
  todos: [],
} as TodoState;

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
