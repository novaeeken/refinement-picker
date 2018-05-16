import React from 'react';
import styled from 'styled-components';

const Checkmark = styled.div`
  position: relative;
  padding: 0 0 0 40px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    height: 25px;
    width: 25px;
    background-color: ${props => props.theme.blueLight};
  }
  /* create the actual checkmark, which is hidden when not checked */
  &::after {
    content: '';
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
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
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${props => props.theme.textWhite};

  /* on hover, add lighter blue background color */
  &:hover ${Input} ~ ${Checkmark}::before {
    background-color: ${props => props.theme.blueItems};
  }
  /* when checkbox is checked add yellow background */
  & ${Input}:checked ~ ${Checkmark}::before {
    background-color: ${props => props.theme.yellowContrast};;
  }
  & ${Input}:checked ~ ${Checkmark}::after {
    display: block;
  }
`;

export default field => (
  <CheckboxWrapper>
    <Input
      type="checkbox"
      name={field.input.name}
      key={field.input.name}
      value={field.input.name}
      onChange={event => field.onCheckboxChange(event)}
    />
    <Checkmark>
      {field.input.name}
    </Checkmark>
  </CheckboxWrapper>
);
