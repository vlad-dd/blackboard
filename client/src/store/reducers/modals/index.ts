import { reducer as cardFormModalSlice } from "./card_form";
import { reducer as userProfileModalSlice } from "./user_profile";
import { reducer as editCardInformationFormModal } from "./edit_card_information_form";

export const MODALS_REDUCER =  {
    cardFormModalSlice,
    userProfileModalSlice,
    editCardInformationFormModal
};