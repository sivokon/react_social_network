import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/authReducer';
import * as axios from 'axios';
import { authApi } from '../../api/api';

class HeaderContainer extends React.Component {

  componentDidMount() {
    authApi.retrieveCurrentLoggedInUserInfo()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          this.props.setCurrentUser(id, login, email);
        }
      });
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

export default connect(mapStateToProps, { setCurrentUser })(HeaderContainer);