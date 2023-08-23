import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    isOpen: boolean
}

export const initialState: IinitialState = {
    isOpen: false
};

const userProfileModalSlice = createSlice({
    name: 'USER_PROFILE_MODAL_STATE',
    initialState,
    reducers: {
        openUserProfileModal: (state) => {
            return { ...state, isOpen: true};
        },
        closeUserProfileModal: (state) => {
            return { ...state, isOpen: false};
        },
    }
});

export const { actions, reducer } = userProfileModalSlice;
export const { openUserProfileModal, closeUserProfileModal } = actions;


export default userProfileModalSlice;