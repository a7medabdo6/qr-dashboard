import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // user: null,
  allbranches: []
};

export const branchesSlice = createSlice({
  name: 'branches',
  initialState,
  reducers: {
    // UserInfo: (state, action) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.user = action.payload;
    // },
    BranchesList: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.allbranches = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { BranchesList } = branchesSlice.actions;

export default branchesSlice.reducer;
