import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 16px;
  text-decoration: none;
  color: $black;
}`;
