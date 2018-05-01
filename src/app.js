import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
// import globalStyle from './style';
import pickerStore from './store/store';
import Start from './components/start';

const store = pickerStore();

export default () => (
  // globalStyle();
  <ReduxProvider store={store}>
    <Start />
  </ReduxProvider>
);
