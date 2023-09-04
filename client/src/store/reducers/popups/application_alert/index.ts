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

const applicationAlertModalSlice = createSlice({
    name: 'APPLICATION_ALERT_MODAL',
    initialState,
    reducers: {
        showApplicationAlertModal: (state, { payload: { message, role } }) => {
            return { ...state, isOpen: true, message, role };
        },
        closeApplicationAlertModal: (state,) => {
            return { ...state, isOpen: false,};
        }
    }
});

export const { actions, reducer } = applicationAlertModalSlice;
export const { showApplicationAlertModal, closeApplicationAlertModal } = actions;


export default applicationAlertModalSlice;