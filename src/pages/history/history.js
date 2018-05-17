import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchHistory } from '../../store/actions/history';
import { Card, Button } from '../../components';
import { TableRow } from './components';

const Table = styled.table`
  width: 100%;
  & th {
    /* background-color: ${props => props.theme.textWhite} */
    background-color: ${props => props.theme.blueDark}
  }
  & td, th {
    padding: 8px;
    border: 1px solid ${props => props.theme.blueLight}
  }
  & tr {
    background-color: ${props => props.theme.textBlue}
  }
  & tr:nth-child(even) {
    background-color: ${props => props.theme.blueItems}
  }
`;

const TableWrapper = Card.extend`
  max-height: 70vh;
  overflow: scroll;
`;

class History extends Component {
  componentDidMount() {
    this.props.fetchHistory();
  }

  render() {
    // create variable with all entry rows
    const { history } = this.props;
    const items = history.map(element => (
      <TableRow
        key={element.date}
        date={element.date.split('T').shift()}
        names={element.names}
      />
    ));

    if (!history.length) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <TableWrapper width="80%" >
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Refiners</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </Table>
        {/* <Button>
          Clear history
        </Button> */}
      </TableWrapper>
    );
  }
}

const mapDispatchtoProps = dispatch => ({
  fetchHistory: () => dispatch(fetchHistory()),
});

const mapStateToProps = state => ({
  history: state.history.history,
});

export default connect(mapStateToProps, mapDispatchtoProps)(History);

