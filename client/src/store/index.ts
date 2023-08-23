import { configureStore } from '@reduxjs/toolkit';
import { stateLogger } from "./middlewares";
import root from "./reducers";

declare global {
    interface Window {
        store: typeof store
    }
}

export const store = configureStore({
    reducer: root,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stateLogger),
});

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch;
export type Store = typeof store;

window.store = store;

export default store;