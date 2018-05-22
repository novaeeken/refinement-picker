import React, { Fragment } from 'react';
import styled from 'styled-components';

const PasswordField = styled.input`
  display: inline;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: 1px solid ${props => props.borderColor};
  flex: 1;
  margin: 0 0.5rem 0 0;
  padding: 0 .5rem;
  font-size: 1rem;

  &:disabled {
    border: none;
    padding-top: 0.25rem;
    background-color: ${props => props.theme.blueMedium};
    color: ${props => props.theme.textWhite};
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: red;
`;

export default (field) => {
  const { meta: { touched, error } } = field;
  return (
    <Fragment>
      <PasswordField
        type="input"
        {...field.input}
        disabled={field.disabled}
        placeholder={field.placeholder}
        borderColor={!field.disabled && touched && error ? 'red' : '#ededed'}
      />
      <ErrorMessage>
        {touched ? error : ''}
      </ErrorMessage>
    </Fragment>
  );
};

