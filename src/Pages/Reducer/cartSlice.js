import { createSlice } from '@reduxjs/toolkit';

// Load cart data from localStorage
const storedCart = JSON.parse(localStorage.getItem('cart')) || {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const initialState = storedCart;

const saveToLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++; // Increase total quantity
      const itemPrice = parseFloat(newItem.price); // Ensure price is a number

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.FirstP,
          price: itemPrice,
          quantity: 1,
          total: itemPrice,
          watch: newItem.watch, 
          img: newItem.img, 
          secondP :newItem.secondP
        });
        state.totalPrice += itemPrice; // Add item's price to total price
      } else {
        existingItem.quantity++;
        existingItem.total += itemPrice;
        state.totalPrice += itemPrice;
      }

      saveToLocalStorage(state); // Save updated state to localStorage
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.total -= existingItem.price;
        }
      }

      saveToLocalStorage(state); // Save updated state to localStorage
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      saveToLocalStorage(state); // Save updated state to localStorage
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
