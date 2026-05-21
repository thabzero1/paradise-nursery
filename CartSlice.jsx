import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('paradiseCart');
    return savedCart ? JSON.parse(savedCart) : { items: [], totalQuantity: 0, totalAmount: 0 };
  } catch {
    return { items: [], totalQuantity: 0, totalAmount: 0 };
  }
};

const saveCartToStorage = (state) => {
  localStorage.setItem('paradiseCart', JSON.stringify({
    items: state.items,
    totalQuantity: state.totalQuantity,
    totalAmount: state.totalAmount
  }));
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
          totalPrice: (action.payload.quantity || 1) * action.payload.price
        });
      }
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      saveCartToStorage(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      saveCartToStorage(state);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
        state.totalQuantity++;
        state.totalAmount += item.price;
        saveCartToStorage(state);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
        state.totalQuantity--;
        state.totalAmount -= item.price;
        saveCartToStorage(state);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      saveCartToStorage(state);
    }
  }
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;