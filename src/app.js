import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import pickerStore from './store/store';
import Start from './components/start';

const store = pickerStore();

export default () => (
  <ReduxProvider store={store}>
    <BrowserRouter history={browserHistory}>
      <Start />
    </BrowserRouter>
  </ReduxProvider>
);
