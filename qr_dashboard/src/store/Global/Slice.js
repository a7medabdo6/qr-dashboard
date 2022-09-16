import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toast: null,
  lang: 'en'
};

export const GlobalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ToastShow: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.toast = action.payload;
    },
    ChangeLang: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.lang = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { ToastShow, ChangeLang } = GlobalSlice.actions;

export default GlobalSlice.reducer;
