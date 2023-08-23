
export const getItemFromLocalStorage = (key: any) => window.localStorage.getItem(key);

export const getToken = () => getItemFromLocalStorage("token");