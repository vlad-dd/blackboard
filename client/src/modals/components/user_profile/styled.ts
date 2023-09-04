import styled from "styled-components";
import { Box, Avatar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const StyledUserProfileBox = styled(Box)`
  position: absolute;
  top: 50%;
  color: black;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #fff;
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
  border: 2px solid #000;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const StyledCloseUserProfileIcon = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: 20px;
`;

export const StyledUserProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledUserProfileAvatar = styled(Avatar)`
  height: 20vh;
  width: 10vw;
  object-fit: cover;
`;

export const StyledUserProfileInformation = styled.div``;

export const StyledDateContainer = styled(Typography)`
  display: flex;
  align-items: center;
`;
