
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCardFormModal } from "../../../store/reducers/modals/card_form";
import { setUpdateNotification } from "../../../store/reducers/planner-cards";
import { cardFormModalStateSelector } from "../../../store/selectors";
import { API } from "../../../api";
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

const CardFormModal = () => {
    //@ts-ignore
    const { isOpen } = useSelector(cardFormModalStateSelector);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date] = useState(new Date());

    const savePlannerCardToDB = async () => {
        try {
            await API.createPlannerCard(window.localStorage.getItem("token"), { task: title, description });
            dispatch(setUpdateNotification("Success"));
            dispatch(showApplicationAlertModal({ message: "Planner card was created!", role: "success" }));
        } catch (error) {
            console.log("error", error)
        }
        finally {
            setTimeout(() => dispatch(closeApplicationAlertModal()), 1500);
        }
    }

    useEffect(() => {
        setTitle("");
        setDescription("");
    }, [isOpen]);

    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeCardFormModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography style={{ color: "black" }} id="modal-modal-title" variant="h6" component="h2">
                    Create New Card
                </Typography>
                <TextField
                    id="outlined-error"
                    label="Title"
                    onChange={({ target: { value } }) => setTitle(value)}
                />
                <TextField
                    multiline
                    id="outlined-error"
                    label="Description"
                    onChange={({ target: { value } }) => setDescription(value)}
                />
                <Button
                    disabled={!title}
                    onClick={() => {
                        const day = date.getDate();
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();
                        const currentDate = `${day}-${month}-${year}`;
                        savePlannerCardToDB()
                        // dispatch(setPlannerCards({ id: crypto.randomUUID(), title, description, currentDate }));
                        dispatch(closeCardFormModal());
                    }} variant="contained">
                    Create
                </Button>
            </Box>
        </Modal >
    )
}

export default CardFormModal;