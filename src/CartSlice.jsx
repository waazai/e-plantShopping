import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // When a plant is added to the cart we push it to the items array. If a
      // quantity isn't provided default to 1 so each item starts with a single
      // unit in the cart.
      const item = {
        ...action.payload,
        quantity: action.payload.quantity ? action.payload.quantity : 1,
      };
      state.items.push(item);
    },
    removeItem: (state, action) => {
      // Remove an item from the cart based on its name
      const name = action.payload.name || action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },
    updateQuantity: (state, action) => {
      // Update the quantity of a cart item. Payload should contain the name of
      // the item and the new quantity amount.
      const { name, amount } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
