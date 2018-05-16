import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { addColleague } from '../../../store/actions/colleagues';
import { Input } from '../../../components/form';
import { Button } from '../../../components';

const Form = styled.form`
  display: flex;
`;

class addColleagueForm extends Component {
  state = {
    term: '',
  }

  onInputChange = (term) => {
    this.setState({ term });
  }

  onSubmit = (value) => {
    this.props.addColleague(value.addColleague);
    this.props.hideForm();
  }

  onCancelClick = () => {
    this.props.hideForm();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="addColleague"
          component={Input}
          placeholder="e.g. Henk"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <Button
          type="submit"
          fontSize="1rem"
          margin="0 0.5rem 0 0"
        >Save</Button>
        <Button
          onClick={() => this.onCancelClick()}
          fontSize="1rem"
          background="blueLight"
          color="black"
        >Cancel</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addColleague: name => dispatch(addColleague(name)),
});

export default reduxForm({
  form: 'add',
})(
  connect(null, mapDispatchToProps)(addColleagueForm),
);
