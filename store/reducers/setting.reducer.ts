import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SettingType = {
  language: 'en' | 'de' | 'jp' | 'se';
  gbColor: '#3F4595' | '#EF82B2' | '#E27437' | '#B39A7C' | '#DDDEE2';
  soundsOn: boolean;
  userSetted: boolean;
};

const initialState: SettingType = {
  language: 'en',
  gbColor: '#3F4595',
  soundsOn: false,
  userSetted: false
};

export const setting = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    changeLang(state, { payload }: PayloadAction<'en' | 'de' | 'jp' | 'se'>) {
      state.language = payload;
    },
    changeGbColor(state, { payload }: PayloadAction<'#3F4595' | '#EF82B2' | '#E27437' | '#B39A7C' | '#DDDEE2'>) {
      state.gbColor = payload;
    },
    toggleSoundOption(state, { payload }: PayloadAction<boolean>) {
      state.soundsOn = payload;
    },
    toggleUserSetted(state, { payload }: PayloadAction<boolean>) {
      state.userSetted = payload;
    }
  }
});

export const { changeLang, changeGbColor, toggleSoundOption, toggleUserSetted } = setting.actions;

export default setting.reducer;
