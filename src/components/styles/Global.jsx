import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
  }

  body {
  }
`;

export const GlobalWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  place-items: center;
`;
