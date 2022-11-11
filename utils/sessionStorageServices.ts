export const sessionStorageServices = {
  set: (key: string, value: any) => {
    if (typeof window === 'undefined') return;
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    if (typeof window === 'undefined') return;
    const data = sessionStorage.getItem(key);
    if (data === 'true') return true;
    if (data === 'false') return false;
    return data as any;
  },
  delete: (key: string) => {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(key);
  },
};
