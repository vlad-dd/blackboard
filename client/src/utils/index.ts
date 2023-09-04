
export const getItemFromLocalStorage = (key: any) => window.localStorage.getItem(key);

export const setItemToLocalStorage = (key: any, value: any) => window.localStorage.setItem(key, value);

export const removeItemFromLocalStorage = (key: any) => window.localStorage.removeItem(key);

export const getToken = () => getItemFromLocalStorage("token");

export const dateFormatter = (createdAt: any) => {
    const date = new Date(createdAt);
    const options: any = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};