import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/authReducer';
import * as axios from 'axios';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
      .then(response => {
        let {id, login, email} = response.data.data;
        this.props.setCurrentUser(id, login, email);
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