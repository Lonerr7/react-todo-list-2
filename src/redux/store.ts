import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import popupSlice from './popupSlice';
import themeSlice from './themeSlice';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    todos: todoSlice,
    popup: popupSlice,
    filters: filtersSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;
