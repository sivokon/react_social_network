import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setCurrentUser, getLoggedInUser } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getLoggedInUser();
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { setCurrentUser, getLoggedInUser })(HeaderContainer);