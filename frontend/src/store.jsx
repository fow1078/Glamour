import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/Cart/cartSlice';
import modalReducer from './features/Modal/modalSlice';
import translatorReducer from './features/Translator/translatorSlice';
import exchangeReducer from './features/Exchange/exchangeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    lang: translatorReducer,
    curr: exchangeReducer
  }
})