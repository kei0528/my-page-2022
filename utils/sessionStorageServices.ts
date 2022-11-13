export const sessionStorageServices = {
  set: (key: string, value: any) => {
    if (typeof window === 'undefined') return null;
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    if (typeof window === 'undefined') return null;
    const data = sessionStorage.getItem(key);
    if (data === 'true') return true;
    if (data === 'false') return false;
    return data as any;
  },
  delete: (key: string) => {
    if (typeof window === 'undefined') return null;
    sessionStorage.removeItem(key);
  },
};
