export const sessionStorageServices = {
  set: (key: string, value: any) => {
    if (!typeof sessionStorage) return;
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    if (!typeof sessionStorage) return;
    const data = sessionStorage.getItem(key);
    if (data === 'true') return true;
    if (data === 'false') return false;
    return data as any;
  },
  delete: (key: string) => {
    if (!typeof sessionStorage) return;
    sessionStorage.removeItem(key);
  }
};
