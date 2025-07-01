import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.name === item.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(i => i.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existing = state.items.find(i => i.name === name);
      if (existing) {
        existing.quantity = quantity;
      }
      state.items = state.items.filter(i => i.quantity > 0);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
