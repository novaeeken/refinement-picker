import React, { Component } from 'react';
// import styled from 'styled-components';
import Card from '../template/card';
import Button from '../template/button';

const ButtonWrapper = Card.extend`
  /* justify-items: center;
  justify-content: center; */
`;

export default class NameAcceptor extends Component {
  render() {
    return (
      <ButtonWrapper width="80%">
        <Button
          background={props => props.theme.blueLight}
          margin="0 1rem 0 0"
        >Probeer opnieuw</Button>
        <Button background={props => props.theme.yellowContrast}>Accepteer</Button>
      </ButtonWrapper>
    );
  }
}

