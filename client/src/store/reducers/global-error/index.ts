import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    hasGlobalError: any,
    globalError: any
}

export const initialState: IinitialState = {
    hasGlobalError: false,
    globalError: ""
};

const globalErrorSlice = createSlice({
    name: "GLOBAL_ERROR_STATE",
    initialState,
    reducers: {
        setGlobalError: (state, { payload }) => {
            return { ...state, hasGlobalError: true, globalError: payload};
        },
    }
});

export const { actions, reducer } = globalErrorSlice;
export const { setGlobalError } = actions;


export default globalErrorSlice;