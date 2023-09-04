import { useState } from "react";
import { useDispatch } from "react-redux";
import { API } from "../../../../../../../api";
import { setUpdateNotification } from "../../../../../../../store/reducers/planner-cards";
import { closeApplicationAlertModal, showApplicationAlertModal } from "../../../../../../../store/reducers/popups/application_alert";
import { openEditCardInformationFormModal, saveSelectedCardId } from "../../../../../../../store/reducers/modals/edit_card_information_form";
import { getToken } from "../../../../../../../utils";
import { ALERT_STATUS, UPDATE_NOTIFICATIONS } from "../../../../../../../global/constants";
import { DELETE_PLANNER_CARD_ERROR_MESSAGE, DELETE_PLANNER_CARD_SUCCESS_MESSAGE } from "../../../constants";

export const usePlannerCardWidget = (sectionId, _id) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const openPlannerCardOptionsMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const closePlannerCardOptionsMenu = () => {
        setAnchorEl(null);
    };

    const plannerCardFunctional = {
        edit: () => {
            dispatch(openEditCardInformationFormModal())
            dispatch(saveSelectedCardId(_id))
            closePlannerCardOptionsMenu();
        },
        delete: async () => {
            try {
                await API.deletePlannerCard(getToken(), sectionId, _id);
                dispatch(setUpdateNotification(UPDATE_NOTIFICATIONS.SUCCESS));
                dispatch(showApplicationAlertModal({ message: DELETE_PLANNER_CARD_SUCCESS_MESSAGE, role: ALERT_STATUS.SUCCESS }));
            } catch (error) {
                dispatch(showApplicationAlertModal({ message: DELETE_PLANNER_CARD_ERROR_MESSAGE, role: ALERT_STATUS.ERROR }));
            }
            finally {
                closePlannerCardOptionsMenu();
                setTimeout(() => dispatch(closeApplicationAlertModal()), ALERT_STATUS.DELAY);
            }
        }
    };

    return {
        anchorEl,
        open,
        plannerCardFunctional,
        openPlannerCardOptionsMenu,
        closePlannerCardOptionsMenu
    };
};
