import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';

export const StyledPlannerCard = styled.div`
  height: 30vh;
  width: 300px;
  display: flex;
  background: #B388FF;
  flex-direction: column;
  color: black;
  gap: 24px;
  padding: 20px;
  overflow-wrap: break-word;
`;

export const StyledCardCategory = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StyledCardDescription = styled.div`
  font-family: Inter;
  font-size: 1.1rem;
  font-style: normal;
  line-height: 26px;
`;

export const StyledCardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  bottom: -13vh;
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  cursor: pointer;
  &:active{
    fill: white;
  }
`;