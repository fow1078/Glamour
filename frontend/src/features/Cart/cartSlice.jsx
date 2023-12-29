import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  cartItems: [],
  amount: 0,
  total: 0,
  total_UAH: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      if (state.cartItems.length === 0) {
        state.cartItems.push(payload)
      } else {
        let ids = state.cartItems.map(item => item.id)
        if (ids.includes(payload.id)) {
          const currentItem = state.cartItems.find((item) => item.id === payload.id)
            currentItem.amount += 1; 
        } else {
          state.cartItems.push(payload)
        }
      }
    }, 
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      })
    }, 
    increase: (state, { payload }) => {
      const currentItem = state.cartItems.find((item) => item.id === payload.id)
      currentItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const currentItem = state.cartItems.find((item) => item.id === payload.id)
      currentItem.amount -= 1;
      if (currentItem.amount == 0) {
        const itemId = payload.id;  
        state.cartItems = state.cartItems.filter((item) => { return item.id !== itemId })
      }
    }, 
    calculateTotals: (state, { payload }) => {
      let amount = 0;
      let total = 0; 
      let total_UAH = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price_USD;
        total_UAH += item.amount * item.price_UAH;
      })
      state.amount = amount;
      state.total = total;
      state.total_UAH = total_UAH;
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
})

export const { addToCart, removeItem, increase, decrease, calculateTotals, clearCart } = cartSlice.actions;


export default cartSlice.reducer;
