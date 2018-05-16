import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, browserHistory, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme, { globalCss } from './theme';
import pickerStore from './store/store';
import { PrivateRoute, PageTemplate } from './components';
import {
  Login,
  Balance,
  History,
  Results,
  Candidates,
  Settings,
} from './pages';

class App extends Component {
  render() {
    const store = pickerStore();
    globalCss();
    return (
      <ReduxProvider store={store}>
        <BrowserRouter history={browserHistory}>
          <ThemeProvider theme={theme}>
            <PageTemplate>
              <Switch>
                <PrivateRoute path="/settings" component={Settings} />
                <Route path="/settings" component={Settings} />
                <Route path="/results" component={Results} />
                <Route path="/balance" component={Balance} />
                <Route path="/history" component={History} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Candidates} />
              </Switch>
            </PageTemplate>
          </ThemeProvider>
        </BrowserRouter>
      </ReduxProvider>
    );
  }
}

export default App;
