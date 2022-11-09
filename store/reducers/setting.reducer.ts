import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ssKeys } from '../../statics/sessionStorageKeys';
import { sessionStorageServices } from '../../utils/sessionStorageServices';

export type SettingType = {
  language: 'en' | 'de' | 'jp' | 'se';
  gbColor: '#3F4595' | '#EF82B2' | '#E27437' | '#B39A7C' | '#DDDEE2';
  soundsOn: boolean;
  userSetted: boolean;
};

const initialState: SettingType = {
  language: 'en',
  gbColor: '#3F4595',
  soundsOn: sessionStorageServices.get(ssKeys.soundsOn) ?? false,
  userSetted: sessionStorageServices.get(ssKeys.userSetted) ?? false
};

export const setting = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    changeLang(state, { payload }: PayloadAction<'en' | 'de' | 'jp' | 'se'>) {
      sessionStorageServices.set(ssKeys.language, payload);
      state.language = payload;
    },
    changeGbColor(state, { payload }: PayloadAction<'#3F4595' | '#EF82B2' | '#E27437' | '#B39A7C' | '#DDDEE2'>) {
      sessionStorageServices.set(ssKeys.gbColor, payload);
      state.gbColor = payload;
    },
    toggleSoundOption(state, { payload }: PayloadAction<boolean>) {
      sessionStorageServices.set(ssKeys.soundsOn, payload);
      state.soundsOn = payload;
    },
    toggleUserSetted(state, { payload }: PayloadAction<boolean>) {
      sessionStorageServices.set(ssKeys.userSetted, payload);
      state.userSetted = payload;
    }
  }
});

export const { changeLang, changeGbColor, toggleSoundOption, toggleUserSetted } = setting.actions;

export default setting.reducer;
