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
  soundsOn: false,
  userSetted: false,
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
    setSoundOption(state, { payload }: PayloadAction<boolean>) {
      sessionStorageServices.set(ssKeys.soundsOn, payload);
      state.soundsOn = payload;
    },
    toggleSoundOption(state) {
      state.soundsOn = !state.soundsOn;
    },
    setUserSetted(state, { payload }: PayloadAction<boolean>) {
      sessionStorageServices.set(ssKeys.userSetted, payload);
      state.userSetted = payload;
    },
    setSettings(state, { payload }: PayloadAction<SettingType>) {
      state = payload;
    },
  },
});

export const { changeLang, changeGbColor, setSoundOption, setUserSetted, setSettings, toggleSoundOption } =
  setting.actions;

export default setting.reducer;
