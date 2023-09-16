import styled from "styled-components";

export const StyledActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  top: 17vh;
  right: 2vw;

  @media screen and (max-width: 718px) {
    right: 15vw;
    flex-direction: row;
 }
   @media screen and (max-width: 526px) {
    right: 10vw;
 }
`;