import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },

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
      state.items = state.items.filter(i => i.name !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find(i => i.name === name);

      if (item && amount > 0) {
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;