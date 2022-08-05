import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import errorSlice from './errorSlice';
import filtersSlice from './filtersSlice';
import popupSlice from './popupSlice';
import themeSlice from './themeSlice';
import todoSlice from './todoSlice';

const rootReducer = combineReducers({
  theme: themeSlice,
  todos: todoSlice,
  popup: popupSlice,
  filters: filtersSlice,
  error: errorSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'todos'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;
