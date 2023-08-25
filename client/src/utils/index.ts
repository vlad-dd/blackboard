
export const getItemFromLocalStorage = (key: any) => window.localStorage.getItem(key);

export const setItemToLocalStorage = (key: any, value: any) => window.localStorage.setItem(key, value);

export const removeItemFromLocalStorage = (key: any) => window.localStorage.removeItem(key);

export const getToken = () => getItemFromLocalStorage("token");