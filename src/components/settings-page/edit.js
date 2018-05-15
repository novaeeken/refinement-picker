import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import FaEdit from 'react-icons/lib/fa/edit';
import FaRemove from 'react-icons/lib/fa/times-circle';
import {
  deleteColleague,
  editColleague,
} from '../../store/actions/colleagues';
import Input from '../form/input';
import Button from '../template/button';

const Form = styled.form`
  display: flex;
`;

const Option = styled.p`
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

class EditColleagueForm extends Component {
  state = {
    term: '',
    originalName: '',
    editing: false,
    removing: false,
  }

  onEditClick = (initialName) => {
    // hide edit button and save the initial value
    this.setState({ editing: true, originalName: initialName });
  }

  onRemoveClick = (name) => {
    if (confirm('Weet je zeker dat je deze collega wil verwijderen?')) { // eslint-disable-line no-alert
      this.props.deleteColleague(name);
    }
  };

  onInputChange = (term) => {
    this.setState({ term });
  }

  onSubmit = (value) => {
    this.props.editColleague(this.state.originalName, value.editColleague);
    this.setState({ editing: false });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* input field with name */}
        <Field
          name="editColleague"
          component={Input}
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          disabled={!this.state.editing}
        />

        {/* edit and delete options  */}
        {!this.state.editing &&
        <Fragment>
          <Option onClick={() =>
            this.onEditClick(this.props.initialValues.editColleague)}
          >Aanpassen <FaEdit /></Option>
          <Option onClick={() =>
            this.onRemoveClick(this.props.initialValues.editColleague)}
          >Verwijderen <FaRemove /></Option>
        </Fragment>
        }

        {/* save and cancel buttons for EDIT */}
        {this.state.editing &&
          <Fragment>
            <Button
              type="submit"
              fontSize="1rem"
              margin="0 0.5rem 0 0"
            >Save</Button>
            <Button
              onClick={() => this.setState({ editing: false })}
              fontSize="1rem"
              background="blueLight"
              color="black"
            >Cancel</Button>
          </Fragment>
        }
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteColleague: name => dispatch(deleteColleague(name)),
  editColleague: (original, edit) => dispatch(editColleague(original, edit)),
});

export default id => reduxForm({
  form: id,
})(
  connect(null, mapDispatchToProps)(EditColleagueForm),
);

