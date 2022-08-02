import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    todos: todoSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
