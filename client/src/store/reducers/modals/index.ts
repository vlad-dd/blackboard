import { reducer as cardFormModalSlice } from "./card_form";
import { reducer as userProfileModalSlice } from "./user_profile";
import { reducer as editCardInformationFormModal } from "./edit_card_information_form";
import { reducer as cardsFilterModalSlice } from "./cards-filter";
import { reducer as actionConfirmationModalSlice } from "./confirmation";

export const MODALS_REDUCER =  {
    cardFormModalSlice,
    userProfileModalSlice,
    editCardInformationFormModal,
    cardsFilterModalSlice,
    actionConfirmationModalSlice
};