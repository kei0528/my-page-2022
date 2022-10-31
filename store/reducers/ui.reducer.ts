import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  globalMenu: { isShown: false }
};

export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleGlobalMenuIsShown(state) {
      state.globalMenu.isShown = !state.globalMenu.isShown;
    }
  }
});

export const { toggleGlobalMenuIsShown } = ui.actions;

export default ui.reducer;
