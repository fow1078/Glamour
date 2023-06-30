import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEnglish: true
}

const translatorState = createSlice({
  name: 'translator',
  initialState: initialState,
  reducers: {
    changeLanguage: (state) => {
      state.isEnglish = !state.isEnglish;
    }
  }
})

export const { changeLanguage } = translatorState.actions;

export default translatorState.reducer;

