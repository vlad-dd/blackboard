import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { size } from "lodash-es";
import { editCardModalStateSelector, plannerCardsSelector } from "../../../../store/selectors";
import { API } from "../../../../api";
import { getToken } from "../../../../utils";
import { setUpdateNotification } from "../../../../store/reducers/planner-cards";
import { closeApplicationAlertPopup, showApplicationAlertPopup } from "../../../../store/reducers/popups/application_alert";
import { closeEditCardInformationFormModal } from "../../../../store/reducers/modals/edit_card_information_form";
import { ALERT_STATUS, UPDATE_NOTIFICATIONS } from "../../../../global/constants";
import { EDIT_CARD_MODAL_ERORR_MESSAGE, EDIT_CARD_MODAL_SUCCESS_MESSAGE } from "../constants";

export const useEditCardFormWidget = () => {
    const { isOpen, selectedCardId } = useSelector(editCardModalStateSelector);
    const { cards, selectedSectionId } = useSelector(plannerCardsSelector)
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const isDisabled = !task || description?.length > 221 || task?.length > 52;

    useEffect(() => {
        if (!!size(cards)) {
            const { task, description } = cards?.find(({ _id: sectionId }) => sectionId === selectedSectionId)?.cards?.find(({ _id: cardId }) => cardId === selectedCardId) ?? {};
            setTask(task);
            setDescription(description);
        }
    }, [selectedCardId])

    const closeEditFormModal = () => dispatch(closeEditCardInformationFormModal());


    const saveEditPlannerCard = async () => {
        try {
            await API.updatePlannerCard(getToken(), { selectedSectionId, selectedCardId, task, description });
            dispatch(setUpdateNotification(UPDATE_NOTIFICATIONS.SUCCESS));
            dispatch(showApplicationAlertPopup({ message: EDIT_CARD_MODAL_SUCCESS_MESSAGE, role: ALERT_STATUS.SUCCESS }))

        } catch (error) {
            dispatch(showApplicationAlertPopup({ message: EDIT_CARD_MODAL_ERORR_MESSAGE, role: ALERT_STATUS.ERROR }))
        }
        finally {
            closeEditFormModal();
            setTimeout(() => dispatch(closeApplicationAlertPopup()), ALERT_STATUS.DELAY);
        }
    }

    return {
        isOpen,
        task,
        description,
        isDisabled,
        setTask,
        setDescription,
        saveEditPlannerCard,
        closeEditFormModal
    };
}