import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
  }
  .MuiFormControl-root {
    background: white !important;
    border-radius: 5px !important; 
  }
  // .MuiBox-root {
  //   background: gray !important;
  // }
`;