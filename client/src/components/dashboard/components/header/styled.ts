import styled from "styled-components";
import { Avatar } from '@mui/material'

export const StyledDashboardAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledDashboardHeaderContainer = styled.div`
  height: 100%;
  background: #161616;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const StyledDashboardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const StyledDashboardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledUserAvatar = styled(Avatar)`
  margin-right: 5px;
  cursor: pointer;
`;