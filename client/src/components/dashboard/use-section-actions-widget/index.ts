import { useDispatch } from "react-redux"
import { openCardsFilterModal } from "../../../store/reducers/modals/cards-filter";
import { openActionConfirmationModalAndSetConfiguration } from "../../../store/reducers/modals/confirmation";
import { API } from "../../../api";
import { getToken } from "../../../utils";
import { setUpdateNotification } from "../../../store/reducers/planner-cards";
import { closeApplicationAlertModal, showApplicationAlertModal } from "../../../store/reducers/popups/application_alert";
import { DELETE_SECTION_CONFIRMATION_MESSAGE, DELETE_SECTION_ERROR_MESSAGE, DELETE_SECTION_SUCCESS_MESSAGE } from "../constants";
import { ALERT_STATUS } from "../../../global/constants";

export const useSectionActionsWidget = (selectedSectionId: any) => {
    const dispatch = useDispatch();

    const deleteSection = async () => {
        try {
            await API.deleteSection(getToken(), selectedSectionId)
            dispatch(setUpdateNotification({ message: DELETE_SECTION_SUCCESS_MESSAGE }));
            dispatch(showApplicationAlertModal({ message: DELETE_SECTION_SUCCESS_MESSAGE, role: ALERT_STATUS.SUCCESS}))
        } catch (error) {
            dispatch(showApplicationAlertModal({ message: DELETE_SECTION_ERROR_MESSAGE, role: ALERT_STATUS.ERROR }))
        }
        finally {
           setTimeout(() =>  dispatch(closeApplicationAlertModal()), ALERT_STATUS.DELAY);
        }
    };

    const actions = {
        openFilterModal: () => dispatch(openCardsFilterModal()),
        deleteCurrentSection: () => dispatch(openActionConfirmationModalAndSetConfiguration({ message: DELETE_SECTION_CONFIRMATION_MESSAGE, action: deleteSection }))
    };

    return {
        SECTION_ACTIONS: actions
    };
}