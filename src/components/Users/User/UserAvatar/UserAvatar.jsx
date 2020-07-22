import React from 'react';
import styles from './UserAvatar.module.css';
import defaultAvatar from '../../../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { followApi } from '../../../../api/api';

const UserAvatar = (props) => {

  const follow = () => {
    props.setFollowingIsInProgress(true, props.userId);
    followApi.followUser(props.userId)
      .then(data => {
        if (data.resultCode === 0) {
          props.toggleFollow(props.userId);
          props.setFollowingIsInProgress(false, props.userId);
        }
      });
  }

  const unfollow = () => {
    props.setFollowingIsInProgress(true, props.userId);
    followApi.unfollowUser(props.userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          props.setFollowingIsInProgress(false, props.userId);
          props.toggleFollow(props.userId);
        }
      });
  }

  return (
    <div className={styles.userAvatar}>
      <NavLink to={`/profile/${props.userId}`}>
        <img src={props.avatar || defaultAvatar} />
      </NavLink>
      <div>
        {
          props.followed
            ? <button
                onClick={unfollow}
                disabled={props.followingInProgressUsersIds.some(e => e == props.userId)}>Unfollow</button>
            : <button
                onClick={follow}
                disabled={props.followingInProgressUsersIds.some(e => e == props.userId)}>Follow</button>
        }
      </div>
    </div>
  );
}

export default UserAvatar;