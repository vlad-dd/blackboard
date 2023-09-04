import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    isOpen: boolean
}

export const initialState: IinitialState = {
    isOpen: false
};

const cardsFilterModalSlice = createSlice({
    name: 'CARDS_FILTER_MODAL_STATE',
    initialState,
    reducers: {
        openCardsFilterModal: (state) => {
            return { ...state, isOpen: true};
        },
        closeCardsFilterModal: (state) => {
            return { ...state, isOpen: false};
        },
    }
});

export const { actions, reducer } = cardsFilterModalSlice;
export const { openCardsFilterModal, closeCardsFilterModal } = actions;


export default cardsFilterModalSlice;