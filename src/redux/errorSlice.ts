import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { ErrorSliceState } from '../types/types';

const initialState = {
  // isErrorPopupOpen: false,
  errors: [],
} as ErrorSliceState;

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errors.push({
        id: nanoid(12),
        errMessage: action.payload,
      });

      // if (!state.isErrorPopupOpen) state.isErrorPopupOpen = true;
    },
    deleteErrorMessage(state, action: PayloadAction<string>) {
      state.errors = state.errors.filter((err) => err.id !== action.payload);

      // if (!state.errors.length) state.isErrorPopupOpen = false;
    },
  },
});

export const { setErrorMessage, deleteErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
