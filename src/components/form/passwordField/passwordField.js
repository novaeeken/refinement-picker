import React, { Fragment } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: inline;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: 1px solid ${props => props.borderColor};
  flex: 1;
  padding: 0 .5rem;
  font-size: 1rem;
  width: 95%;
`;

const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: red;
`;

export default (field) => {
  const { meta: { touched, error } } = field;
  console.log(error);

  return (
    <Fragment>
      <Input
        borderColor={touched && error ? 'red' : '#ededed'}
        type="password"
        {...field.input}
      />
      <ErrorMessage>
        {touched ? error : ''}
      </ErrorMessage>
    </Fragment>
  );
};
