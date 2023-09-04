import styled from "styled-components";
import { Menu, alpha } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

export const StyledPlannerCardWrapper = styled.div`
  height: 30vh;
  width: 300px;
  display: flex;
  color: black;
  flex-direction: column;
  background: #B388FF;
  border-radius: 8px;
  padding: 16px;
  overflow-wrap: break-word;
`;

export const StyledCardCategory = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  white-space: normal;
  max-width: 90%;
`;

export const StyledCardDescription = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 1.5px;
  margin-top: 8px;
  overflow: scroll;
`;

export const StyledCardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px;
  text-align: center;
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
  fill: #484848;
  cursor: pointer;
`;