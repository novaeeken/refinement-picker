import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 50vh;
`;

const animateOne = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); } 
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

const animateTwo = keyframes`
  0% { transform: translate(-50%, -50%) rotate(360deg) scale(0.4); }
  100% { transform: translate(-50%, -50%) rotate(0deg) scale(0.4); }
`;

const Circle1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-width: 60px;
  border-style: solid;
  border-color: ${props => props.theme.yellowContrast} ${props => props.theme.circleOrange} ${props => props.theme.yellowContrast} ${props => props.theme.circleOrange};
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(0,0,0,.8);
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    border-color: ${props => props.theme.blueMedium} ${props => props.theme.blueLight} ${props => props.theme.blueItems} ${props => props.theme.textBlue};
    border-width: 150px;
    border-style: solid;
    width: 0px;
    border-radius: 50%;
    transform: rotate(45deg); 
  }
  animation: ${animateOne} linear 6s 2;
`;

const Circle2 = Circle1.extend`
  border-width: 80px;
  width: 300px;
  height: 300px;
  &::before {
    border-width: 150px;
  }
  animation: ${animateTwo} linear 3s 2;
`;

class NamePicker extends Component {
  render() {
    return (
      <Container>
        <Circle1 />
        <Circle2 />
      </Container>
    );
  }
}

export default NamePicker;
