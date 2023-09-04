import { createSlice } from '@reduxjs/toolkit';
interface IinitialState {
    cards: any,
    updateObserver: any,
    selectedSectionId: any
}

export const initialState: IinitialState = {
    cards: [],
    updateObserver: { message: "" },
    selectedSectionId: null
};

const plannerCardsSlice = createSlice({
    name: "SAVE_PLANNER_CARDS",
    initialState,
    reducers: {
        setPlannerCards: (state, { payload }) => {
            console.log("D", payload)
            return { ...state, cards: [...payload]};
        },
        setUpdateNotification: (state, { payload }) => {
            return { ...state, updateObserver: { message: payload }};
        },
        setSelectedSectionId: (state, { payload }) => {
            return { ...state, selectedSectionId: payload};
        }
    }
});

export const { actions, reducer } = plannerCardsSlice;
export const { setPlannerCards, setUpdateNotification, setSelectedSectionId } = actions;


export default plannerCardsSlice;