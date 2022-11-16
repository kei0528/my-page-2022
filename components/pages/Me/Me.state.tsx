import VanillaTilt from 'vanilla-tilt';
import { RefObject, useEffect, useState } from 'react';
import { isTouchDevice } from '../../../utils/environmentServices';

export const useCompState = ({ profileImgRef }: { profileImgRef: RefObject<HTMLDivElement> }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!profileImgRef.current || isTouchDevice) return;
    VanillaTilt.init(profileImgRef.current, {
      max: 40,
      scale: 1.1,
      glare: true,
      'max-glare': 0.6,
      transition: true,
      gyroscope: true,
      speed: 500,
      perspective: 300,
    });
  }, [profileImgRef]);

  return { clicked, setClicked };
};
