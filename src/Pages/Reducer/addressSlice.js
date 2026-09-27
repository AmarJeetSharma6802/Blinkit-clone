import { createSlice } from '@reduxjs/toolkit';

// Load saved delivery address from localStorage
const loadAddress = () => {
  try {
    return JSON.parse(localStorage.getItem('deliveryAddress')) || null;
  } catch {
    return null;
  }
};

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    saved: loadAddress(),
  },

  reducers: {
    saveAddress(state, action) {
      state.saved = action.payload;
      localStorage.setItem('deliveryAddress', JSON.stringify(action.payload));
    },
    clearAddress(state) {
      state.saved = null;
      localStorage.removeItem('deliveryAddress');
    },
  },
});

export const { saveAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
