import React, { Component, Fragment } from 'react';
import NameSpinner from './name-spinner';
import NameShower from './name-shower';
import NameAcceptor from './name-acceptor';
import Card from '../template/card';

const ResultWrapper = Card.extend`
display: flex;
flex-direction: row;
width: 100%;
`;

export default class RefinementResults extends Component {
  render() {
    return (
      <Fragment>
        <ResultWrapper>
          <NameSpinner />
          <NameShower />
        </ResultWrapper>
        <NameAcceptor />
      </Fragment>
    );
  }
}
