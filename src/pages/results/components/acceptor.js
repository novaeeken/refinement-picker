import React, { Component } from 'react';
import { Card, Button } from '../../../components';

export default class NameAcceptor extends Component {
  render() {
    return (
      <Card width="80%">
        <Button
          background={props => props.theme.blueLight}
          margin="0 1rem 0 0"
        >Probeer opnieuw</Button>
        <Button background={props => props.theme.yellowContrast}>Accepteer</Button>
      </Card>
    );
  }
}
