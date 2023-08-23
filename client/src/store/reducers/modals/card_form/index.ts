import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    isOpen: boolean
}

export const initialState: IinitialState = {
    isOpen: false
};

const cardFormModalSlice = createSlice({
    name: 'CARD_FORM_MODAL_STATE',
    initialState,
    reducers: {
        openCardFormModal: (state) => {
            return { ...state, isOpen: true};
        },
        closeCardFormModal: (state) => {
            return { ...state, isOpen: false};
        },
    }
});

export const { actions, reducer } = cardFormModalSlice;
export const { openCardFormModal, closeCardFormModal } = actions;


export default cardFormModalSlice;