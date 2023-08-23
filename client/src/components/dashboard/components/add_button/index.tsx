import React from "react";
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { openCardFormModal } from '../../../../store/reducers/modals/card_form';
import { StyledAddPlannerCard } from './styled';

const AddNewPlannerCard = () => {
    const dispatch = useDispatch();
    return (
        <StyledAddPlannerCard
            onClick={() => dispatch(openCardFormModal())}
            variant="outlined">
            <AddIcon />
        </StyledAddPlannerCard>
    )
}

export default AddNewPlannerCard;