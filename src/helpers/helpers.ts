import { setErrorMessage } from '../redux/errorSlice';
import { openErrorPopup } from '../redux/popupSlice';
import { AppDispatch } from '../redux/store';

export const setErrorMessageShowPopup = (
  dispatch: AppDispatch,
  errorMsg: string
) => {
  console.log(`From function`);

  dispatch(setErrorMessage(errorMsg));
  dispatch(openErrorPopup());
};
