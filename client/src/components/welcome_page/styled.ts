import styled from "styled-components";

export const StyledWelcomePageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledCircles = styled.div`
  margin-top: 56px;
  text-align: center;
  @media (max-width: 640px) { 

   }
`;

export const StyledTitleContainer = styled.div`
  text-align: center;
  font-family: Inter;
  font-size: 2.75rem;
  margin-top: -45px;
  font-style: normal;
  letter-spacing: -5.576px;
  @media (max-width: 640px) { 
    font-size: 1.65rem;
    padding-top: 15px;
    letter-spacing: -2.576px;
   }
`;

export const StyledTitle = styled.h1``;

export const StyledDescriptionContainer = styled.div`
  height: 46px;
  width: 50%;
  background: #B388FF;
  margin: 0 auto;
  margin-top: -35px;
  border-radius: 14.299px;
  padding: 16.98px 12.588px 15.399px 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) { 
    padding: 6.98px 2.588px 5.399px 3px;
   }
`;

export const StyledDescription = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 2.45rem;
  font-style: normal;
  font-weight: 400;
  line-height: 53.621px;
  @media (max-width: 640px) { 
    font-size: 1.45rem;
    line-height: 23.621px;
   }
`;

export const StyledSponsorsWrapper = styled.div`
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledSponsorsContainer = styled.div`
  height: 10vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  @media (max-width: 640px) { 
    min-height: 33vh;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
   }
`;

export const StyledImageContainer = styled.div``;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin-top: 15px;
`;

export const StyledExplanationTitle = styled.h3`
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  margin-left: 16px;
`;

export const StyledExplanationNote = styled.li`
  color: #A9A9A9;
  font-family: Inter;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
`;

export const StyledExplanationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  padding: 15px;
`;

export const StyledExplanationItemContainer = styled.div``;

export const StyledExplanationImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const SponsorsTitle = styled.h1`
  text-align: center;
`;

export const StyledSponsorsContainerItem = styled.div``;
