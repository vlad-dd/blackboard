import { combineReducers } from 'redux';
import { MODALS_REDUCER } from './modals';
import { POPUPS_REDUCER } from './popups';
import { reducer as plannerCardsSlice } from "./planner-cards";
import { reducer as authUserSlice } from "./user";
import { reducer as globalErrorSlice } from "./global-error";

const root = combineReducers({
    ...MODALS_REDUCER,
    ...POPUPS_REDUCER,
    plannerCardsSlice,
    authUserSlice,
    globalErrorSlice
});

export default root;