import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    isOpen: boolean,
    message: any,
    role: any
}

export const initialState: IinitialState = {
    isOpen: false,
    message: "",
    role: ""
};

const applicationAlertPopupSlice = createSlice({
    name: 'APPLICATION_ALERT_MODAL',
    initialState,
    reducers: {
        showApplicationAlertPopup: (state, { payload: { message, role } }) => {
            return { ...state, isOpen: true, message, role };
        },
        closeApplicationAlertPopup: (state,) => {
            return { ...state, isOpen: false,};
        }
    }
});

export const { actions, reducer } = applicationAlertPopupSlice;
export const { showApplicationAlertPopup, closeApplicationAlertPopup } = actions;


export default applicationAlertPopupSlice;