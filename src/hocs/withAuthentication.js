import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isAuthenticated: state.authenticated,
});

const withAuthentication = WrappedComponent =>
  connect(mapStateToProps)(WrappedComponent);

export default withAuthentication;
