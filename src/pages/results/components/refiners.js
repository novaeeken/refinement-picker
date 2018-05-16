import React, { Component, Fragment } from 'react';
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
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Title = styled.div`
  position: relative;
  width: 300px;
  height: 75px;
  margin-top: 10px;
  padding: 25px;
  text-align: center;
  background-color: ${props => props.theme.textBlue};
  border-radius: 15px;
  font-weight: 100;
  font-size: 1.4em;
`;

const Name1 = Title.extend`
  background-color: ${props => props.theme.blueLight};
  animation: ${swingDown} 1s 1s 1;
  animation-fill-mode: both;
`;

const Name2 = Title.extend`
  background-color: ${props => props.theme.blueLight};
  /* same animation but delayed 3 seconds */
  animation: ${swingDown} 1s 3s 1;
  animation-fill-mode: both;
`;

class Refiners extends Component {
  render() {
    return (
      <ShowWrapper>
        <Title>
          <p>Vandaag refinen:</p>
        </Title>
        {this.props.picked && this.props.picked.length > 0 &&
        <Fragment>
          <Name1>
            <p>{this.props.picked[0].name1}</p>
          </Name1>
          <Name2>
            <p>{this.props.picked[0].name2}</p>
          </Name2>
        </Fragment>
        }
      </ShowWrapper>
    );
  }
}

const mapStateToProps = state => ({ picked: state.colleagues.picked });

export default connect(mapStateToProps)(Refiners);
