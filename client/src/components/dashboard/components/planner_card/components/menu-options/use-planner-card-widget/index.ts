import { useState } from "react";
import { useDispatch } from "react-redux";
import { API } from "../../../../../../../api";
import { setUpdateNotification } from "../../../../../../../store/reducers/planner-cards";
import { closeApplicationAlertModal, showApplicationAlertModal } from "../../../../../../../store/reducers/popups/application_alert";
import { openEditCardInformationFormModal, saveSelectedCardId } from "../../../../../../../store/reducers/modals/edit_card_information_form";
import { getToken } from "../../../../../../../utils";

export const usePlannerCardWidget = (_id) => {
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
                await API.deletePlannerCard(getToken(), _id);
                dispatch(setUpdateNotification("Success"));
                dispatch(showApplicationAlertModal({ message: "Planner card was deleted successfully!", role: "success" }));
            } catch (error) {
                dispatch(showApplicationAlertModal({ message: "You are not able to delete this planner card!", role: "error" }));
            }
            finally {
                closePlannerCardOptionsMenu();
                setTimeout(() => dispatch(closeApplicationAlertModal()), 1500);
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
