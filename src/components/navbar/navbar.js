import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { authenticate } from '../../store/actions/types';
import { Button } from '../';

const Ul = styled.ul`
  list-style-type: none;
  background-color: ${props => props.theme.yellowContrast};
  display: flex;
  height: 3.75rem;
  margin: 0px;
  & li {
    align-self: center;
    display: inline;
    padding-right: 40px;
  }
  & li a {
    text-decoration: none;
    color: ${props => props.theme.blueDark};
  }
  & li a:hover, a:focus {
    text-decoration: none;
    color: ${props => props.theme.textWhite};
  }
`;

class Navbar extends Component {
  authButton() {
    if (!this.props.authenticated) {
      return (
        <Link to="/login">
          <Button
            fontSize="1rem"
            background={props => props.theme.blueMedium}
          >Log in</Button>
        </Link>
      );
    }
    return (
      <Link to="/">
        <Button
          fontSize="1rem"
          background={props => props.theme.blueMedium}
          onClick={() => this.props.authenticate(false)}
        >Log uit</Button>
      </Link>
    );
  }

  render() {
    return (
      <Fragment>
        <nav>
          <Ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/balance">Balans</Link></li>
            <li><Link to="/history">Geschiedenis</Link></li>
            <li><Link to="/settings">Instellingen</Link></li>
            <li>{this.authButton()}</li>
          </Ul>
        </nav>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authenticate: boolean => dispatch(authenticate(boolean)),
});

const mapStateToProps = state => ({
  authenticated: state.authenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
