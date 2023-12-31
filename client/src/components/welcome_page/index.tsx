import React, { useContext } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { ThemeContext } from '../../contexts/theme';
import { Circles, Sponsors } from './components';
import { APPLICATION_DESCRIPTION, APPLICATION_NAME } from './constants';
import {
    StyledDarkModeSwitch,
    StyledDescription,
    StyledDescriptionContainer,
    StyledTitle,
    StyledTitleContainer,
    StyledWelcomePageContainer
} from './styled';
import { Button } from '@mui/material';

const WelcomePage = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)!;

    return (
        <StyledWelcomePageContainer>
            <Circles />
            <StyledTitleContainer>
                <StyledTitle>{APPLICATION_NAME}</StyledTitle>
            </StyledTitleContainer>
            <StyledDescriptionContainer>
                <StyledDescription>{APPLICATION_DESCRIPTION}</StyledDescription>
            </StyledDescriptionContainer>
            <div style={{ textAlign: "center", padding: "55px" }}>
                <Button href='/dashboard' variant="contained" endIcon={<SendIcon />}>
                    Go to your dashboard
                </Button>
            </div>
            <Sponsors />
            <StyledDarkModeSwitch
                checked={theme}
                onChange={toggleTheme}
                size={40}
                sunColor='yellow'
                moonColor='black'
            />
        </StyledWelcomePageContainer>
    )
}

export default WelcomePage;