import React from 'react';
import styles from './UserAvatar.module.css';
import defaultAvatar from '../../../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

const UserAvatar = (props) => {

  const follow = (userId) => {
    props.followUser(userId);
  }

  const unfollow = (userId) => {
    props.unfollowUser(userId);
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
                onClick={() => unfollow(props.userId)}
                disabled={props.followingInProgressUsersIds.some(e => e == props.userId)}>Unfollow</button>
            : <button
                onClick={() => follow(props.userId)}
                disabled={props.followingInProgressUsersIds.some(e => e == props.userId)}>Follow</button>
        }
      </div>
    </div>
  );
}

export default UserAvatar;