import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // user: null,
  Ingredients: []
};

export const IngredientSlice = createSlice({
  name: 'Ingredient',
  initialState,
  reducers: {
    IngredientList: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.Ingredients = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { IngredientList } = IngredientSlice.actions;

export default IngredientSlice.reducer;
