import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
// import Footer from './footer';

const ContentWrapper = styled.div`
  background-color: #1A212E;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f8f9fc;
  height: calc(100vh - 3.75rem);
  font-weight: 100;
  font-size: 1em;
`;

export default class PageTemplate extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ContentWrapper>
          {this.props.children}
        </ContentWrapper>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}
