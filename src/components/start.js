import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NameCandidates from './name-candidates';
import NamePicker from './name-picker';
import NameShower from './name-shower';
import theme, { globalCss } from '../theme';

const Container = styled.div`
  background-color: #1A212E;
  display: flex;
  /* LET OP */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f8f9fc;
  height: 100vh;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 1em;
`;

class App extends Component {
  state = { view: 'NameCandidates' };

  setView = (component) => {
    this.setState({ view: component });
  }

  render() {
    const { view } = this.state;
    globalCss();
    return (
      <ThemeProvider theme={theme}>
        <Container>
          { view === 'NameCandidates' && <NameCandidates toNextStep={this.setView} /> }
          { view === 'NamePicker' && <NamePicker toNextStep={this.setView} /> }
          { view === 'NamePicker' && <NameShower /> }
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
