import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Checkbox from './checkbox';

import {
  fetchColleagues,
  setAvailableColleague,
  removeAvailableColleague,
  setPickedColleagues,
  updateColleagues,
} from '../store/actions/colleagues';

import { pickTwoNames } from '../helpers/namepicker';

const CandidateWrapper = styled.div`
  width: 300px;
  padding: 25px;
  background-color: ${props => props.theme.blueMedium};
  border-radius: 15px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.yellowContrast};
  color: ${props => props.theme.textWhite};
  font-size: 1.4em;
  padding: 0.5em 1em;
  border: 0px;
  border-radius: 10px;
  width: 100%;
`;

const H2 = styled.h2`
  font-weight: 200;
  font-size: 22px;
`;

class NameCandidates extends Component {
  componentDidMount() {
    this.props.getColleagues();
  }

  onButtonClick = () => {
    const { colleagues, candidates } = this.props;

    if (colleagues.length > 0 && candidates.length > 2) {
      const outcome = pickTwoNames(colleagues, candidates);
      this.props.setPickedColleagues(outcome);
      this.props.updateColleagues(outcome[1].updatedBase);
      this.props.toNextStep('NamePicker');
    }
  }

  onCheckboxChange = (event) => {
    if (event.target.checked) {
      this.props.setAvailableColleague(event.target.value);
    }
    if (!event.target.checked) {
      this.props.removeAvailableColleague(event.target.value);
    }
  }

  render() {
    const colleagues = this.props.colleagues;

    const Checkboxes = colleagues.map(element => (
      <Checkbox
        key={element.name}
        value={element.name}
        onCheckboxChange={this.onCheckboxChange}
      />
    ));

    return (
      <CandidateWrapper>
        <H2>Wie is er vandaag aanwezig?</H2>
        {Checkboxes}
        <Button onClick={() => this.onButtonClick()} >Start</Button>
      </CandidateWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getColleagues: () => dispatch(fetchColleagues()),
  setAvailableColleague: name => dispatch(setAvailableColleague(name)),
  removeAvailableColleague: name => dispatch(removeAvailableColleague(name)),
  setPickedColleagues: names => dispatch(setPickedColleagues(names)),
  updateColleagues: updatedList => dispatch(updateColleagues(updatedList)),
});

const mapStateToProps = state => ({
  colleagues: state.colleagues.colleagues,
  candidates: state.colleagues.available,
});

export default connect(mapStateToProps, mapDispatchToProps)(NameCandidates);

