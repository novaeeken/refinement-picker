import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { Card, Button } from '../../components';
import { PasswordField } from '../../components/form';
import { authenticate } from '../../store/actions/types';

const Form = styled.form`
  margin: 20px 0 10px 0;
`;

class Login extends Component {
  state = {
    term: '',
  }

  onSubmit = (value) => {
    if (value.loginCode === '1992') {
      this.props.authenticate(true);
      this.props.history.push('/settings');
    } else {
      // error
    }
  }

  onInputChange = (term) => {
    this.setState({ term });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Card>
        <h4>Deze functionaliteit is afgeschermd</h4>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="loginCode"
            component={PasswordField}
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
          <Button
            type="submit"
          >Login</Button>
        </Form>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authenticate: boolean => dispatch(authenticate(boolean)),
});

const mapStateToProps = state => ({
  authenticated: state.authenticated,
});

export default reduxForm({
  form: 'login',
})(
  connect(mapStateToProps, mapDispatchToProps)(Login),
);

