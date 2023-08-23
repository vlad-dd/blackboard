import { SPONSORS } from '../welcome_page/constants';
import styled from "styled-components";

export const StyledFooterWrapper = styled.footer`
  width: 100%;
  margin-top: auto;

`;

export const StyledFooterContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem 3.5rem;

  @media screen and (max-width: 768px) {
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;
}

  @media screen and (max-width: 426px) {
   grid-template-columns: repeat(1, 1fr);
   padding: 3rem 2rem;
}
`;

export const StyledCopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  padding: 1.5rem;
  font-weight: 100;
`;

export const StyledBlackBoardServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
`;

export const StyledBlackBoardServicesListItem = styled.li``;

export const StyledBlackBoardServicesListTitle = styled.h3``;

export const StyledBlackBoardServicesListLink = styled.a`
  text-decoration: none;
  color: gray;
  cursor: pointer;
  &:hover {
    color: whitesmoke;
  }
  &:active {
    color: black;
  }
`;

export const StyledFooterSocialMediaWrapper = styled.div`
  
`;

export const StyledSocialMediaTitle = styled.h1``;
export const StyledSocialMediaDescription = styled.p``;

export const StyledFooterSocialMediaContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  font-size: 1.25rem; 
`;

export const StyledFooterSocialMedia = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  transition: all 0.4s;
`;

export const StyledFooterSubscription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSubscriptionTitle = styled.h3``;
export const StyledSubscriptionDescription = styled.p``;