import { RefObject, useEffect } from 'react';
import { useSound } from '../../../hooks/useSound';

export const useCompState = ({ menuRef }: { menuRef: RefObject<HTMLUListElement> }) => {
  const { playHoverSound, playClickSound } = useSound();

  useEffect(() => {
    function _playClickSound() {
      playClickSound();
    }
    function _playHoverSound() {
      playHoverSound();
    }

    const main = menuRef.current;
    main?.addEventListener('click', _playClickSound);
    main?.addEventListener('mouseover', _playHoverSound);

    return () => {
      main?.removeEventListener('click', _playClickSound);
      main?.removeEventListener('mouseover', _playHoverSound);
    };
  }, [menuRef, playClickSound, playHoverSound]);
};
