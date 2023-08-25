
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCardFormModal } from "../../../store/reducers/modals/card_form";
import { setPlannerCards, setUpdateNotification } from "../../../store/reducers/planner-cards";
import { editCardModalStateSelector, plannerCardsSelector } from "../../../store/selectors";
import { API } from "../../../api";
import { closeEditCardInformationFormModal } from "../../../store/reducers/modals/edit_card_information_form";
import { closeApplicationAlertModal, showApplicationAlertModal } from "../../../store/reducers/popups/application_alert";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "35px"
};

const EditCardFormModal = () => {
    const { isOpen, selectedCardId } = useSelector(editCardModalStateSelector);
    const { cards } = useSelector(plannerCardsSelector)
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [date] = useState(new Date());

    useEffect(() => {
        if(cards.length > 0) {
            const { task, description } = cards?.find(({ _id }) => _id === selectedCardId) ?? {};
            setTask(task);
            setDescription(description);
        }
    }, [selectedCardId])


    const saveEditPlannerCard = async () => {
        try {
            await API.updatePlannerCard(window.localStorage.getItem("token"), { ...cards.find(({ _id }) => _id === selectedCardId), task, description });
            dispatch(setUpdateNotification("Success"));
            dispatch(showApplicationAlertModal({ message: "Planner card information was successfully updated!", role: "success" }))

        } catch (error) {
           console.log("error")
        }
         finally{
            setTimeout(() => dispatch(closeApplicationAlertModal()), 1500);
         }
    }

    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeEditCardInformationFormModal())}
        >
            <Box sx={style}>
                <Typography style={{ color: "black" }} id="modal-modal-title" variant="h6" component="h2">
                    Edit card information
                </Typography>
                <TextField
                    id="outlined-error"
                    label="Title"
                    value={task}
                    onChange={({ target: { value } }) => setTask(value)}
                />
                <TextField
                    multiline
                    id="outlined-error"
                    label="Description"
                    value={description}
                    onChange={({ target: { value } }) => setDescription(value)}
                />
                <Button 
                  disabled={!task}
                  onClick={() => {
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    const currentDate = `${day}-${month}-${year}`;
                    // savePlannerCardToDB()
                    saveEditPlannerCard();
                    // dispatch(setPlannerCards({ id: crypto.randomUUID(), title, description, currentDate }));
                    dispatch(closeEditCardInformationFormModal());
                }} variant="contained">
                    Edit
                </Button>
            </Box>
        </Modal>
    )
}

export default EditCardFormModal;