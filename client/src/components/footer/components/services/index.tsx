import React from 'react';
import { Service } from './components';
import { BLACKBOARD_SERVICES } from '../../constants';
import {
    StyledBlackBoardServicesList,
    StyledBlackBoardServicesListItem,
    StyledBlackBoardServicesListTitle
} from '../../styled';

const BlackBoardServices = () => {
    return (
        <>
            {BLACKBOARD_SERVICES.map(({ id, title, services }: any) => (
                <StyledBlackBoardServicesList key={id}>
                    <StyledBlackBoardServicesListItem>
                        <StyledBlackBoardServicesListTitle>
                            {title}
                        </StyledBlackBoardServicesListTitle>
                    </StyledBlackBoardServicesListItem>
                    {services.map((service: string) => <Service service={service} />)}
                </StyledBlackBoardServicesList>
            ))}
        </>
    )
}

export default BlackBoardServices