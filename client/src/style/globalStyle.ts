import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from 'styled-components';
import { ITheme } from '../interfaces/theme';

const GlobalStyle = createGlobalStyle`
:root{
  --font-family: 'Comic Neue', cursive, impact;
  --darkColor: #0e1217;
  --activeLink: #0e121754;
  --white: rgb(245, 244, 242);
  --white-opacity50: #ffffff50;
  --white-opacity80: #ffffff80;
  --border-radius: 1.2vw;
  --box-shadow: rgba(14,18,23, 0.3) 0px 2px 3px,
      rgba(14,18,23, 0.3) 0px 7px 7px -3px, rgba(14,18,23, 0.2) 0px -1px 0px inset;
  --mainColor: ${({ theme }: ThemeProps<ITheme>): any => theme.mainColor};
  --opacityColor: ${({ theme }: ThemeProps<ITheme>): any => theme.opacityColor};
  --backgroundColor: ${({ theme }: ThemeProps<ITheme>): any =>
    theme.backgroundColor};
  --buttonColor: ${({ theme }: ThemeProps<ITheme>): any => theme.buttonColor};
  --buttonOnHoverColor: ${({ theme }: ThemeProps<ITheme>): any =>
    theme.buttonOnHoverColor};
  --otherColor: ${({ theme }: ThemeProps<ITheme>): any => theme.otherColor};
}
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
main {
  display: flex;
  height: 75vh;
}
a, li, ul {
    text-decoration: none;
    color: var(--darkColor);
    font-size: 1.6rem;
      font-weight: 300;
}
h1,h2,h3,h4,h5,h6, p, li{
  font-family: var(--font-family);
}
h1 {
    font-size: 3rem;
    font-weight: 400;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  @media screen and (max-width: 700px) {
  body {
    flex-direction: column;
    width: 100vw;
    align-items: center;
  }
  main {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 2rem;
    line-height: 3rem;
  }
  h3 {
    font-size: 2rem;
    line-height: 3rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
}
`;
export default GlobalStyle;
