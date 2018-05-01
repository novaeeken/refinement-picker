import React from 'react';
import styled from 'styled-components';

// backgrounds etc.
const blueDark = '#1b2230';
const blueMedium = '#202938';
const blueLight = '#2c364a';
const blueItems = '#374560';
const yellowContrast = '#fea00e';

// texts
const textBlue = '#5a657b';
const textWhite = '#f8f9fc';


const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  /* blueLight */
  background-color: #2c364a;
  /* create the actual checkmark, which is hidden when not checked */
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Input = styled.input`
  /* hide browsers default checkbox */
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CheckboxWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #f8f9fc;

  /* on hover, add lighter blue background color */
  &:hover ${Input} ~ ${Checkmark} {
    background-color: #374560;
  }
  /* when checkbox is checked add yellow background */
  & ${Input}:checked ~ ${Checkmark} {
    background-color: #fea00e;
  }
  & ${Input}:checked ~ ${Checkmark}:after {
    display: block;
  }
`;

const Checkbox = ({ value, onCheckboxChange }) => (
  <CheckboxWrapper> {value}
    <Input type="checkbox" name="name" key={value} value={value} onChange={event => onCheckboxChange(event)} /> 
    <Checkmark className="checkmark" />
  </CheckboxWrapper>
);

export default Checkbox;
