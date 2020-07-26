import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || 2;
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile profile={this.props.profile}/>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.userProfile,
  }
}

let ProfileContainerWithAuthRedirect = withAuthRedirect(ProfileContainer);
let ProfileContainerWithUrlParams = withRouter(ProfileContainerWithAuthRedirect);

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(ProfileContainerWithUrlParams);