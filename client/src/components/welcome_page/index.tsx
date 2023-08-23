import { useContext, useState } from 'react';
import { Circles, Sponsors } from './components';
import { APPLICATION_DESCRIPTION, APPLICATION_NAME } from './constants';
import {
    StyledDescription,
    StyledDescriptionContainer,
    StyledImage,
    StyledImageContainer,
    StyledTitle,
    StyledTitleContainer,
    StyledWelcomePageContainer
} from './styled';
import { ThemeContext } from '../../contexts/theme';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const WelcomePage = () => {
    const { theme, toggleTheme }: any = useContext(ThemeContext);

    return (
        <StyledWelcomePageContainer>
            <Circles />
            <StyledTitleContainer>
                <StyledTitle>{APPLICATION_NAME}</StyledTitle>
            </StyledTitleContainer>
            <StyledDescriptionContainer>
                <StyledDescription>{APPLICATION_DESCRIPTION}</StyledDescription>
            </StyledDescriptionContainer>
            {/* <StyledImageContainer>
                <StyledImage src={WELCOME_PAGE_BACKGROUND_IMAGE} />
            </StyledImageContainer> */}
            <Sponsors />
            <DarkModeSwitch
                style={{ marginBottom: '2rem', position: "absolute", right: 30, top: 20 }}
                checked={theme}
                onChange={toggleTheme}
                size={40}
                sunColor='yellow'
                moonColor='black'
            />
        </StyledWelcomePageContainer>
    )
}

export default WelcomePage