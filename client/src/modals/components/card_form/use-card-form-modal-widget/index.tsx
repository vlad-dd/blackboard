import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { size } from "lodash-es";
import { cardFormModalStateSelector, plannerCardsSelector } from "../../../../store/selectors";
import { setUpdateNotification } from "../../../../store/reducers/planner-cards";
import { closeApplicationAlertModal, showApplicationAlertModal } from "../../../../store/reducers/popups/application_alert";
import { API } from "../../../../api";
import { closeCardFormModal } from "../../../../store/reducers/modals/card_form";
import { getToken } from "../../../../utils";
import { ALERT_STATUS, UPDATE_NOTIFICATIONS } from "../../../../global/constants";
import { setGlobalError } from "../../../../store/reducers/global-error";
import {
    PLANNER_CARD_CREATION_SUCCESS_MESSAGE,
    PLANNER_SECTION_CREATION_SUCCESS_MESSAGE,
    MAX_DESCRIPTION_LENGTH,
    MAX_TASK_LENGTH
} from "../constants";

export const useCardFormModalWidget = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(cardFormModalStateSelector);
    const { cards, selectedSectionId } = useSelector(plannerCardsSelector);
    const [showCreateNewSectionInput, setShowCreateNewSectionInput] = useState(false);
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [section, setSection] = useState('');
    const [placeholder, setPlaceholder] = useState("");
    const basicIsDisabledConfugiration = size(task) > MAX_TASK_LENGTH || size(description) > MAX_DESCRIPTION_LENGTH;
    const isDisabled = showCreateNewSectionInput ? (!task || !section || basicIsDisabledConfugiration) : (!task || !placeholder || basicIsDisabledConfugiration);

    const savePlannerCardToDB = async () => {
        try {
            if (!showCreateNewSectionInput) {
                await API.createPlannerCard(getToken(), { _id: selectedSectionId, section, task, description });
                dispatch(setUpdateNotification(UPDATE_NOTIFICATIONS.SUCCESS));
                dispatch(showApplicationAlertModal({ message: PLANNER_CARD_CREATION_SUCCESS_MESSAGE, role: ALERT_STATUS.SUCCESS }));
            } else {
                await API.createPlannerCard(getToken(), { section, task, description });
                dispatch(setUpdateNotification(UPDATE_NOTIFICATIONS.SUCCESS));
                dispatch(showApplicationAlertModal({ message: PLANNER_SECTION_CREATION_SUCCESS_MESSAGE, role: ALERT_STATUS.SUCCESS }));
            }
        } catch (error) {
            dispatch(setGlobalError(error));
        }
        finally {
            dispatch(closeCardFormModal());
            setTimeout(() => dispatch(closeApplicationAlertModal()), ALERT_STATUS.DELAY);
        }
    }

    useEffect(() => {
        setTask("");
        setDescription("");
    }, [isOpen]);

    return {
        isOpen,
        cards,
        showCreateNewSectionInput,
        section,
        placeholder,
        isDisabled,
        dispatch,
        setSection,
        setShowCreateNewSectionInput,
        setTask,
        setDescription,
        setPlaceholder,
        savePlannerCardToDB
    };
};