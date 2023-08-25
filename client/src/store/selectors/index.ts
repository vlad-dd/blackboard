
const getState = (state: any) => state;

export const authUserSelector = (state: any) => getState(state).authUserSlice;

export const cardFormModalStateSelector = (state: any) => getState(state).cardFormModalSlice;

export const plannerCardsSelector = (state: any) => getState(state).plannerCardsSlice;

export const userProfileModalStateSelector = (state: any) => getState(state).userProfileModalSlice;

export const editCardModalStateSelector = (state: any) => getState(state).editCardInformationFormModal;

export const applicationAlertStateSelector = (state: any) => getState(state).applicationAlertModalSlice;

export const globalErrorStateSelector = (state: any) => getState(state).globalErrorSlice;