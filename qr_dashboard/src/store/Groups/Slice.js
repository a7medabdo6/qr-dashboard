import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // user: null,
  allgroups: null
};

export const groupsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // UserInfo: (state, action) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.user = action.payload;
    // },
    GroupsList: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.allgroups = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { GroupsList } = groupsSlice.actions;

export default groupsSlice.reducer;
