import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileApi } from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || 2;

    profileApi.retrieveProfileByUserId(userId)
      .then(data => {
        this.props.setUserProfile(data);
      });
  }

  render() {
    return <Profile profile={this.props.profile}/>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.userProfile
  }
}

let ProfileContainerWithUrlParams = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(ProfileContainerWithUrlParams);