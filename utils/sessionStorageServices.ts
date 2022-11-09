export const sessionStorageServices = {
  set: (key: string, value: any) => {
    if (!typeof sessionStorageServices) return;
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    if (!typeof sessionStorageServices) return;
    const data = sessionStorage.getItem(key);
    if (data === 'true') return true;
    if (data === 'false') return false;
    return data as any;
  },
  delete: (key: string) => {
    if (!typeof sessionStorageServices) return;
    sessionStorage.removeItem(key);
  }
};
