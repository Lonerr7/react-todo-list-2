import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPopupOpen: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    changePopupOpen(state) {
      state.isPopupOpen = !state.isPopupOpen;
    },
  },
});

export const { changePopupOpen } = popupSlice.actions;
export default popupSlice.reducer;
