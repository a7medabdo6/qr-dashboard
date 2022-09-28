import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // user: null,
  allCategory: []
};

export const CategorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    CategoryList: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.allCategory = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { CategoryList } = CategorySlice.actions;

export default CategorySlice.reducer;
