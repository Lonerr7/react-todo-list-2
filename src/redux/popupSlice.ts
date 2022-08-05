import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDeletePopupOpen: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    changePopupOpen(state) {
      state.isDeletePopupOpen = !state.isDeletePopupOpen;
    },
  },
});

export const { changePopupOpen } = popupSlice.actions;
export default popupSlice.reducer;
