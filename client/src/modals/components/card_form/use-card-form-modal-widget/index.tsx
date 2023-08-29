import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { size } from "lodash-es";
import { cardFormModalStateSelector } from "../../../../store/selectors";
import { setUpdateNotification } from "../../../../store/reducers/planner-cards";
import { closeApplicationAlertModal, showApplicationAlertModal } from "../../../../store/reducers/popups/application_alert";
import { API } from "../../../../api";
import { closeCardFormModal } from "../../../../store/reducers/modals/card_form";
import { MAX_DESCRIPTION_LENGTH, MAX_TASK_LENGTH } from "../constants";
import { getToken } from "../../../../utils";
import { UPDATE_NOTIFICATIONS } from "../../../../global/constants";

export const useCardFormModalWidget = () => {
    const { isOpen } = useSelector(cardFormModalStateSelector);
    const dispatch = useDispatch();
    const [task, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const isDisabled = !task || size(task) > MAX_TASK_LENGTH || size(description) > MAX_DESCRIPTION_LENGTH;

    const savePlannerCardToDB = async () => {
        try {
            await API.createPlannerCard(getToken(), { task, description });
            dispatch(setUpdateNotification(UPDATE_NOTIFICATIONS.SUCCESS));
            dispatch(showApplicationAlertModal({ message: "Planner card was created!", role: "success" }));
        } catch (error) {
            console.log("error", error)
        }
        finally {
            dispatch(closeCardFormModal());
            setTimeout(() => dispatch(closeApplicationAlertModal()), 1500);
        }
    }

    useEffect(() => {
        setTitle("");
        setDescription("");
    }, [isOpen]);

    return {
        isOpen,
        isDisabled,
        dispatch,
        setTitle,
        setDescription,
        savePlannerCardToDB
    };
};