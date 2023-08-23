import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    user: any
}

export const initialState: IinitialState = {
    user: []
};

const authUserSlice = createSlice({
    name: "AUTH_USER",
    initialState,
    reducers: {
        saveAuthUser: (state, { payload }) => {
            return { ...state, user: payload};
        },
    }
});

export const { actions, reducer } = authUserSlice;
export const { saveAuthUser } = actions;


export default authUserSlice;