import VanillaTilt from 'vanilla-tilt';
import { RefObject, useEffect } from 'react';

export const useCompState = ({ profileImgRef }: { profileImgRef: RefObject<HTMLDivElement> }) => {
  useEffect(() => {
    if (!profileImgRef.current) return;
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

  return {};
};
