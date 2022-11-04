import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './reducers/setting.reducer';
import uiReducer from './reducers/ui.reducer';

const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      setting: settingReducer
    }
  });

export default makeStore;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
