import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    removeCart: (state, action) => {
      const data = state.items.filter((item) => item.id !== action.payload);
      state.items = data;
    },
    removeSignalItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[index].qty >= 1) {
        state.items[index].qty -= 1;
      }
    },
  },
});
export const selectCartItem = (state) => state.cart.items;
export const selectCartTotalPrice = (state) => state.cart.totalPrice;

export const { addToCart, removeCart, removeSignalItem } = cartSlice.actions;
export default cartSlice.reducer;
