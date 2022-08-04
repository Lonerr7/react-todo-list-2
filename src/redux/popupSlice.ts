import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDeletePopupOpen: false,
  isErrorPopupOpen: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    changePopupOpen(state) {
      state.isDeletePopupOpen = !state.isDeletePopupOpen;
    },
    openErrorPopup(state) {
      state.isErrorPopupOpen = true;
    },
    closeErrorPopup(state) {
      state.isErrorPopupOpen = false;
    },
  },
});

export const { changePopupOpen, openErrorPopup, closeErrorPopup } =
  popupSlice.actions;
export default popupSlice.reducer;
