export const sessionStorageServices = {
  set: (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    const data = sessionStorage.getItem(key);
    if (data === 'true') return true;
    if (data === 'false') return false;
    return data as any;
  },
  delete: (key: string) => {
    sessionStorage.removeItem(key);
  }
};
