import React from 'react';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { dateFormatter } from '../../../../utils';
import { PlannerCardMenuOptions } from './components';
import { IPlannerCard } from './interfaces';
import {
    StyledPlannerCardWrapper,
    StyledCardCategory,
    StyledCardDescription,
    StyledCardDate,
    StyledPlannerCardHeader,
} from './styled';

const PlannerCard = ({ _id, task, description, createdAt }: IPlannerCard) => {
    return (
        <StyledPlannerCardWrapper key={_id}>
            <StyledPlannerCardHeader>
                <StyledCardCategory>{task}</StyledCardCategory>
                <PlannerCardMenuOptions selectedCardId={_id} />
            </StyledPlannerCardHeader>
            <StyledCardDescription>
                {description}
            </StyledCardDescription>
            <StyledCardDate>
                <CalendarMonthTwoToneIcon />
                {dateFormatter(createdAt)}
            </StyledCardDate>
        </StyledPlannerCardWrapper>
    )
};

export default PlannerCard