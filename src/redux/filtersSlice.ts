import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filters } from '../types/types';

const initialState = {
  filter: Filters.ALL,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<Filters>) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
