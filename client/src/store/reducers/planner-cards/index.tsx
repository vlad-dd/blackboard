import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    cards: any,
    updateNotification: any
}

export const initialState: IinitialState = {
    cards: [],
    updateNotification: { message: "" }
};

const plannerCardsSlice = createSlice({
    name: "SAVE_PLANNER_CARDS",
    initialState,
    reducers: {
        setPlannerCards: (state, { payload }) => {
            return { ...state, cards: [...payload]};
        },
        setUpdateNotification: (state, { payload }) => {
            console.log("payload", payload)
            return { ...state, updateNotification: { message: payload }};
        }
    }
});

export const { actions, reducer } = plannerCardsSlice;
export const { setPlannerCards, setUpdateNotification } = actions;


export default plannerCardsSlice;