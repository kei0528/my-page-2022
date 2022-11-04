import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { SettingType } from '../store/reducers/setting.reducer';

export const useSound = () => {
  const { soundsOn } = useSelector<AppState>(state => state.setting) as SettingType;

  const playClickSound = () => {
    if (soundsOn) {
      const audio = new Audio('/assets/sounds/click.wav');
      audio.play();
    }
  };

  const playHoverSound = () => {
    if (soundsOn) {
      const audio = new Audio('/assets/sounds/hover.wav');
      audio.play();
    }
  };

  const playMenuOpenSound = () => {
    if (soundsOn) {
      const audio = new Audio('/assets/sounds/menu-open.mp3');
      audio.play();
    }
  };

  return {
    playClickSound,
    playHoverSound,
    playMenuOpenSound
  };
};
