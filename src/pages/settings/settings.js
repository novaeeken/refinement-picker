import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import FaPlus from 'react-icons/lib/fa/plus';
import uuidv4 from 'uuid/v4';
import { fetchColleagues } from '../../store/actions/colleagues';
import { SettingsRow, AddForm } from './components';
import { Card, Button } from '../../components';

class Settings extends Component {
  state = {
    displayNewColleagueForm: false,
  }

  componentDidMount() {
    if (this.props.colleagues.length === 0) {
      this.props.getColleagues();
    }
  }
  onButtonClick = () => {
    this.setState({ displayNewColleagueForm: true });
  };

  hideNewColleagueFrom = () => {
    this.setState({ displayNewColleagueForm: false });
  }

  render() {
    const colleagues = this.props.colleagues.map(element => (
      <SettingsRow
        key={uuidv4()}
        id={uuidv4()}
        name={element.name}
      />
    ));

    return (
      <Fragment>
        <Card>
          {/* DISPLAY & EDIT COLLEAGUE FORM */}
          {colleagues}
          {/* ADD NEW COLLEAGUE BUTTON */}
          {!this.state.displayNewColleagueForm &&
            <Button
              onClick={this.onButtonClick}
              fontSize="1rem"
            ><FaPlus /></Button>
          }
          {/* // ADD NEW COLLEAGUE FORM */}
          {this.state.displayNewColleagueForm &&
            <AddForm
              hideForm={this.hideNewColleagueFrom}
            />
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
