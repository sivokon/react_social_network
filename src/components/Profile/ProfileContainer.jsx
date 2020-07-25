import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || 2;
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to="/login"/>
    }
    
    return <Profile profile={this.props.profile}/>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
  }
}

let ProfileContainerWithUrlParams = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(ProfileContainerWithUrlParams);