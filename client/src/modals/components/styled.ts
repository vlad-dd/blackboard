import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledCardFormBox = styled(Box)`
  position: absolute;
  top: 50%;
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

export const StyledCardHeaderTitle = styled(Typography)`
  color: black;
`