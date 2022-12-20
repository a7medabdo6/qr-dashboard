import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {}
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    }
  }
});

export const { setProduct } = ProductsSlice.actions;

export default ProductsSlice.reducer;
