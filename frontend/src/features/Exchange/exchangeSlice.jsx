import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUSD: true
}

const exchangeState = createSlice({
  name: 'exchange',
  initialState: initialState,
  reducers: {
    changeCurrency: (state, { payload }) => {
      state.isUSD = payload.ifUsd;
    }
  }
})

export const { changeCurrency } = exchangeState.actions;

export default exchangeState.reducer;

