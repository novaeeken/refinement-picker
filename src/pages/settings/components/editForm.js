import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import FaEdit from 'react-icons/lib/fa/edit';
import FaRemove from 'react-icons/lib/fa/times-circle';
import { requiredValidator, minLengthValidator } from '../../../helpers/formValidators';
import {
  deleteColleague,
  editColleague,
  setOriginalColleague,
} from '../../../store/actions/colleagues';
import { Input } from '../../../components/form';
import { Button } from '../../../components';

const Form = styled.form`
  display: flex;
`;

const Option = styled.p`
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const required = requiredValidator('Please enter a name');
const minLength = minLengthValidator('Name must be at least 3 characters long');

class EditForm extends Component {
  state = {
    term: '',
    editing: false,
    removing: false,
  }

  onEditClick = (initialName) => {
    // hide edit button and save the initial value
    this.props.setOriginalColleague(initialName);
    this.setState({ editing: true });
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
    // passing on the original and edited input
    this.props.editColleague(value.editColleague);
    this.setState({ editing: false });
  }

  onCancel = () => {
    // reset the field to it's initial value
    this.props.reset();
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
          validate={[required, minLength]}
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
              onClick={() => this.onCancel()}
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

const mapStateToProps = state => ({
  originalName: state.colleagues.originalName,
});

const mapDispatchToProps = dispatch => ({
  deleteColleague: name => dispatch(deleteColleague(name)),
  editColleague: (original, edit) => dispatch(editColleague(original, edit)),
  setOriginalColleague: name => dispatch(setOriginalColleague(name)),
});

export default id => reduxForm({
  form: id,
  enableReinitialize: true,
})(
  connect(mapStateToProps, mapDispatchToProps)(EditForm),
);
