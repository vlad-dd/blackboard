import styled from "styled-components";
import { Menu, alpha } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

export const StyledPlannerCardWrapper = styled.div`
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
  &:active {
    fill: white;
  }
`;

export const StyledPlannerCardOptionsMenu = styled(Menu)<any>(({ theme }) => {
  const styles: any = {
    '& .MuiPaper-root': {
      borderRadius: "6px",
      marginTop: "8px",
      minWidth: 180,
      color: theme.body === 'black' ? 'rgb(55, 65, 81)' : "#e0e0e0",
      boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: "rgba(0, 0, 0, 0.6)",
          marginRight: "12px",
        },
        '&:active': {
          backgroundColor: alpha("#1976d2", 0.08),
        },
      },
    },
  };
  return styles;
});

export const StyledPlannerCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledMoreVertIcon = styled(MoreVertIcon)`
  cursor: pointer;
`;