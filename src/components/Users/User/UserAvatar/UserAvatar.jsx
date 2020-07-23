import React from 'react';
import styles from './UserAvatar.module.css';
import defaultAvatar from '../../../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

const UserAvatar = (props) => {

  const follow = () => {
    props.followUser(props.userId);
  }

  const unfollow = () => {
    props.unfollowUser(props.userId);
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