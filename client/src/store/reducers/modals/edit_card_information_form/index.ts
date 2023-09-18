import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    isOpen: boolean,
    selectedCardId: any
}

export const initialState: IinitialState = {
    isOpen: false,
    selectedCardId: ""
};

const editCardInformationFormModalSlice = createSlice({
    name: 'EDIT_CARD_INFORMATION_FORM_MODAL_STATE',
    initialState,
    reducers: {
        openEditCardInformationFormModal: (state) => {
            return { ...state, isOpen: true };
        },
        closeEditCardInformationFormModal: (state) => {
            return { ...state, isOpen: false };
        },
        saveSelectedCardId: (state, { payload }) => {
            return { ...state, selectedCardId: payload }
        }
    }
});

export const { actions, reducer } = editCardInformationFormModalSlice;
export const {
    openEditCardInformationFormModal,
    closeEditCardInformationFormModal,
    saveSelectedCardId
} = actions;

export default editCardInformationFormModalSlice;