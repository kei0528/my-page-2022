export const sleep = async (time: number) => await new Promise((res) => setTimeout(res, time));
export const isTouchDevice =
  typeof window !== 'undefined' && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
