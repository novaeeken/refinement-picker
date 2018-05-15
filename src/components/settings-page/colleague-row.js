import React, { Component } from 'react';
import styled from 'styled-components';
import editForm from './edit';

const RowWrapper = styled.div`
  & p, h3 {
    display: inline;
  }
  & div {
    display: inline-block;
    width: 20rem;
    margin: 5px 0;
  }
`;

class ColleagueRow extends Component {
  render() {
    const EditForm = editForm(this.props.id);

    return (
      <RowWrapper>
        <EditForm
          initialValues={
            {
              editColleague: this.props.name,
            }
          }
        />
      </RowWrapper>
    );
  }
}

export default ColleagueRow;
