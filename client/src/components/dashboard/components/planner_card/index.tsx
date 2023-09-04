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

const PlannerCard = ({ _id, sectionId, task, description, date }: any) => {
    return (
        <StyledPlannerCardWrapper key={_id}>
            <StyledPlannerCardHeader>
                <StyledCardCategory>{task}</StyledCardCategory>
                <PlannerCardMenuOptions sectionId={sectionId} selectedCardId={_id} />
            </StyledPlannerCardHeader>
            <StyledCardDescription>
                {description}
            </StyledCardDescription>
            <StyledCardDate>
                <CalendarMonthTwoToneIcon />
                {dateFormatter(date)}
            </StyledCardDate>
        </StyledPlannerCardWrapper>
    )
};

export default PlannerCard