import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const swingDown = keyframes`
0% {
    transform: perspective(350px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(350px) rotateX(-20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(350px) rotateX(10deg);
    opacity: 1;
  }

  80% { transform: perspective(350px) rotateX(-5deg); }

  100% { transform: perspective(350px); }
`;

const ShowWrapper = styled.div`
  position: relative;
  width: 300px;
  margin-top: 10px;
  padding: 25px;
  text-align: center;
  background-color: ${props => props.theme.blueMedium};
  border-radius: 15px;
  font-weight: 100;
  font-size: 1.4em;
`;

const Name1 = ShowWrapper.extend`
  background-color: ${props => props.theme.blueLight};
  /* opacity: 0; */
  animation: ${swingDown} 1s 1s 1;
  animation-fill-mode: both;
`;

const Name2 = ShowWrapper.extend`
  background-color: ${props => props.theme.blueLight};
  /* opacity: 0; */
  /* same animation but delayed 3 seconds */
  animation: ${swingDown} 1s 3s 1;
  animation-fill-mode: both;
`;

class NamePicker extends Component {
  render() {
    if (!this.props.picked || this.props.picked.length === 0) {
      return (
        <ShowWrapper>
          <h3>Vandaag refinen: </h3>
        </ShowWrapper>
      );
    }

    return (
      <div>
        <ShowWrapper>
          <p>Vandaag refinen:</p>
        </ShowWrapper>
        <Name1>
          <p>{this.props.picked[0].name1}</p>
        </Name1>
        <Name2>
          <p>{this.props.picked[0].name2}</p>
        </Name2>
      </div>
    );
  }
}

const mapStateToProps = state => ({ picked: state.colleagues.picked });

export default connect(mapStateToProps)(NamePicker);
