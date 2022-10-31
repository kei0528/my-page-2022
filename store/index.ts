import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/ui.reducer';

const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer
    }
  });

export default makeStore;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
