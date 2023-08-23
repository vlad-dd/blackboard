import { combineReducers } from 'redux';
import { MODALS_REDUCER } from './modals';
import { reducer as plannerCardsSlice } from "./planner-cards";
import { reducer as authUserSlice } from "./user";

const root = combineReducers({
    ...MODALS_REDUCER,
    plannerCardsSlice,
    authUserSlice
});

export default root;