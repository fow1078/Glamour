import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
}

const modalState = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    }, 
  }
})

export const { openModal, closeModal } = modalState.actions;

export default modalState.reducer;

