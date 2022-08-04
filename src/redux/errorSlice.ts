import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  error: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorMessage(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
