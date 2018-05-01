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
  body {
    padding: 0px;
    margin: 0px;
  }
`;
