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
    toggleIsCompleted(state, action: PayloadAction<string>) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
          return todo;
        }
        return todo;
      });
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    deleteAllTodos(state) {
      state.todos = [];
    },
  },
});

export const { addTodo, toggleIsCompleted, deleteTodo, deleteAllTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
