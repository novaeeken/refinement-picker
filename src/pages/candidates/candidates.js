import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Card } from '../../components';
import { Checkbox } from '../../components/form';

import {
  fetchColleagues,
  setAvailableColleague,
  removeAvailableColleague,
  setPickedColleagues,
  updateColleagues,
} from '../../store/actions/colleagues';

import { updateHistory } from '../../store/actions/history';
// THIS NEEDS TO BE CHANGED:
import { pickTwoNames } from '../../helpers/namepicker';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

class NameCandidates extends Component {
  componentDidMount() {
    if (this.props.colleagues.length === 0) {
      this.props.getColleagues();
    }
  }

  onSubmit = () => {
    const { colleagues, candidates } = this.props;
    if (colleagues.length > 1) {
      // 1. pick two names based on current count data and candidates
      const outcome = pickTwoNames(colleagues, candidates);
      // 2.set result(two names) and updated-count-object in store
      this.props.setPickedColleagues(outcome);
      this.props.history.push('/results');
    }
  }

  onCheckboxChange = (event) => {
    if (event.target.checked) {
      // place colleague name in the store
      this.props.setAvailableColleague(event.target.value);
    }
    if (!event.target.checked) {
      // remove colleague name from the store
      this.props.removeAvailableColleague(event.target.value);
    }
  }

  render() {
    const { handleSubmit, colleagues } = this.props;

    const names = colleagues.map(element => (
      <Field
        name={element.name}
        key={element.name}
        value={element.name}
        component={Checkbox}
        onCheckboxChange={this.onCheckboxChange}
      />
    ));

    return (
      <Card>
        <h2>Wie is er vandaag aanwezig?</h2>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {names}
          <Button
            type="submit"
            fontSize="1.4rem"
            width="100%"
            margin="20px 0 0 0"
          >Start</Button>
        </Form>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getColleagues: () => dispatch(fetchColleagues()),
  setAvailableColleague: name => dispatch(setAvailableColleague(name)),
  removeAvailableColleague: name => dispatch(removeAvailableColleague(name)),
  setPickedColleagues: names => dispatch(setPickedColleagues(names)),
  updateColleagues: updatedList => dispatch(updateColleagues(updatedList)),
  updateHistory: pickedNames => dispatch(updateHistory(pickedNames)),
});

const mapStateToProps = state => ({
  colleagues: state.colleagues.colleagues,
  candidates: state.colleagues.available,
});

export default reduxForm({
  form: 'candidates',
})(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(NameCandidates)),
);
