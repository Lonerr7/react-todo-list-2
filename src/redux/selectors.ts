import { createSelector } from '@reduxjs/toolkit';
import { Filters } from '../types/types';
import { RootState } from './store';

export const selectAllTodos = (state: RootState) => state.todos.todos;
const selectActiveFilter = (state: RootState) => state.filters.filter;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos, activeFilter) => {
    if (activeFilter === Filters.ALL) return allTodos;
    if (activeFilter === Filters.COMPLETED) {
      return allTodos.filter((todo) => todo.isCompleted);
    }

    return allTodos.filter((todo) => !todo.isCompleted);
  }
);
