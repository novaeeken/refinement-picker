import React, { Fragment } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: inline;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ededed;
  flex: 1;
  margin: 0 0.5rem 0 0;
  padding: 0 .5rem;
  font-size: 1rem;

`;

export default field => (
  <Fragment>
    <Input
      type="password"
      {...field.input}
    />
    {/* <div className="text-help">
      {touched ? error : ''}
    </div> */}
  </Fragment>
);
