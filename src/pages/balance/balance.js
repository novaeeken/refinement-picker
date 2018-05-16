import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Card } from '../../components';

import { fetchColleagues } from '../../store/actions/colleagues';

class Balance extends Component {
  componentDidMount() {
    this.props.getColleagues();
  }

  render() {
    const names = this.props.colleagues.map(element => element.name);
    const counts = this.props.colleagues.map(element => element.count);

    const data = {
      labels: names,
      datasets: [{
        label: null,
        backgroundColor: '#fea00e',
        borderColor: '#fea00e',
        data: counts,
        fontColor: '#5a657b',
      }],
    };

    if (!names.length) {
      return (
        <Card> Loading.. </Card>
      );
    }

    return (
      <Fragment>
        <Card width="80%" align="center">
          <h2> Hallo dit is een titel super leuk sexy yolo </h2>
        </Card>
        <Card width="80%">
          <Bar
            data={data}
            height={100}
          />
        </Card>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getColleagues: () => dispatch(fetchColleagues()),
});

const mapStateToProps = state => ({
  colleagues: state.colleagues.colleagues,
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
