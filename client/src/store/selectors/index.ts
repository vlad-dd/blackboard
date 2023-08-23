
const getState = (state: any) => state;

export const authUserSelector = (state: any) => getState(state).authUserSlice;

export const cardFormModalStateSelector = (state: any) => getState(state).cardFormModalSlice;

export const plannerCardsSelector = (state: any) => getState(state).plannerCardsSlice;

export const userProfileModalStateSelector = (state: any) => getState(state).userProfileModalSlice;

export const editCardModalStateSelector = (state: any) => getState(state).editCardInformationFormModal;