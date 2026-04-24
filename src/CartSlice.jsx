import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {

    // ✅ ADD ITEM
    addItem: (state, action) => {
      const item = action.payload;

      // Check if item already exists
      const existingItem = state.items.find(
        (i) => i.name === item.name
      );

      if (existingItem) {
        // If exists → increase quantity
        existingItem.quantity += 1;
      } else {
        // If new → add with quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // ✅ REMOVE ITEM
    removeItem: (state, action) => {
      const name = action.payload;

      state.items = state.items.filter(
        (item) => item.name !== name
      );
    },

    // ✅ UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const item = state.items.find(
        (i) => i.name === name
      );

      if (item) {
        item.quantity = quantity;
      }
    },

  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;