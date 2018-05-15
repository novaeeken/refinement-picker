import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PrivateRoute from './privateRoute/privateRoute';
import NameCandidates from './picker-page/name-candidates';
import RefinementResults from './picker-page/refinement-results';
import Settings from './settings-page/settings';
import Balance from './balance-page/balance';
import History from './history-page/history';
import Login from './settings-page/login';
import PageTemplate from './template/page-template';
import theme, { globalCss } from '../theme';

class App extends Component {
  render() {
    globalCss();
    return (
      <ThemeProvider theme={theme}>
        <PageTemplate>
          <Switch>
            <PrivateRoute path="/settings" component={Settings} />
            <Route path="/settings" component={Settings} />
            <Route path="/results" component={RefinementResults} />
            <Route path="/balance" component={Balance} />
            <Route path="/history" component={History} />
            <Route path="/login" component={Login} />
            <Route path="/" component={NameCandidates} />
          </Switch>
        </PageTemplate>
      </ThemeProvider>
    );
  }
}

export default App;
