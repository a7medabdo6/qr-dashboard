import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tenants: null
};

export const TenantSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    TenantList: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.tenants = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { TenantList } = TenantSlice.actions;

export default TenantSlice.reducer;
