import React, { Component, Fragment } from 'react';
import { Card, Spinner } from '../../components';
import { Refiners, Acceptor } from './components';

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
          <Spinner />
          <Refiners />
        </ResultWrapper>
        <Acceptor />
      </Fragment>
    );
  }
}
