import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Types: [],
  Units: []
};

export const NutrientsSlice = createSlice({
  name: 'Nutrients',
  initialState,
  reducers: {
    TypesList: (state, action) => {
      state.Types = action.payload;
    },
    UnitsList: (state, action) => {
      state.Units = action.payload;
    }
  }
});

export const { TypesList, UnitsList } = NutrientsSlice.actions;

export default NutrientsSlice.reducer;
