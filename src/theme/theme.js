import { injectGlobal } from 'styled-components';

export default {
  blueDark: '#1b2230',
  blueMedium: '#202938',
  blueLight: '#2c364a',
  blueItems: '#374560',
  yellowContrast: '#fea00e',
  circleYellow: '#FEC265',
  circleOrange: '#E15634',
  textBlue: '#5a657b',
  textWhite: '#f8f9fc',
};

export const globalCss = () => injectGlobal`
  html {
    font-size: 16px;
  }

  body {
    padding: 0rem;
    margin: 0rem;
    font-family: Helvetica, Arial, sans-serif;
  }

  h1 {

  }

  h2 {
    
    font-weight: 200;
    font-size: 1.5rem;
  }

  button {
    font-size: 1.4em;
    padding: 0.5em 1em;
    border: 0px;
    border-radius: 10px;
    width: 100%;
  }
`;
