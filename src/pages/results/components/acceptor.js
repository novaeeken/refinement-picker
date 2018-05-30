import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import FaCheck from 'react-icons/lib/fa/check';
import { Card, Button } from '../../../components';

import {
  updateColleagues,
  setPickedColleagues,
} from '../../../store/actions/colleagues';
import { updateHistory } from '../../../store/actions/history';

const CompleteIcon = styled(FaCheck)`
  padding: 0 10px 0 0;
  color: ${props => props.theme.yellowContrast};
`;

const AcceptMessage = styled.div`
  padding: 15px;
  & ${CompleteIcon}, h3 {
    display: inline;
  }
`;

class NameAcceptor extends Component {
  state = {
    accepted: false,
  }

  onSubmit = () => {
    const { picked } = this.props;
    // update the current count with the updated-count-object
    this.props.updateColleagues(picked[1].updatedBase);
    // write to database as history
    this.props.updateHistory(picked[0]);
    this.setState({ accepted: true });
  }

  onCancelClick = () => {
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Card width="80%">
        {!this.state.accepted &&
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Button
              margin="0 1rem 0 0"
              background={props => props.theme.blueLight}
              onClick={this.onCancelClick}
            >Probeer opnieuw</Button>
            <Button
              type="submit"
              background={props => props.theme.yellowContrast}
            >Accepteer</Button>
          </form>
        }
        {this.state.accepted &&
          <AcceptMessage>
            <CompleteIcon />
            <h3>Refiners zijn opgeslagen.</h3>
          </AcceptMessage>
        }
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  picked: state.colleagues.picked,
  candidates: state.colleagues.available,
  colleagues: state.colleagues.colleagues,
});

const mapDispatchToProps = dispatch => ({
  updateColleagues: updatedList => dispatch(updateColleagues(updatedList)),
  updateHistory: pickedNames => dispatch(updateHistory(pickedNames)),
  setPickedColleagues: names => dispatch(setPickedColleagues(names)),
});

export default reduxForm({
  form: 'acceptor',
})(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(NameAcceptor)),
);

