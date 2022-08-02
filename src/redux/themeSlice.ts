import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Themes } from '../types/types';

const initialState = {
  currentTheme: Themes.DARK,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<Themes.DARK | Themes.LIGHT>) {
      state.currentTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
