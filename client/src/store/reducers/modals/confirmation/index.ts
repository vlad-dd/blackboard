import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    isOpen: boolean
    message: string, 
    action: any
}

export const initialState: IinitialState = {
    isOpen: false,
    message: "", 
    action: null
};

const actionConfirmationModalSlice = createSlice({
    name: 'ACTION_CONFIRMATION_MODAL_STATE',
    initialState,
    reducers: {
        openActionConfirmationModalAndSetConfiguration: (state, { payload: { message, action } }) => {
            return { ...state, isOpen: true, message, action };
        },
        closeActionConfirmationModal: (state) => {
            return { ...state, isOpen: false};
        },
    }
});

export const { actions, reducer } = actionConfirmationModalSlice;
export const { openActionConfirmationModalAndSetConfiguration, closeActionConfirmationModal } = actions;


export default actionConfirmationModalSlice;