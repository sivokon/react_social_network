import React from 'react';
import styles from './UserAvatar.module.css';
import defaultAvatar from '../../../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

const UserAvatar = (props) => {
  return (
    <div className={styles.userAvatar}>
      <NavLink to={`/profile/${props.userId}`}>
        <img src={props.avatar || defaultAvatar} />
      </NavLink>
      <div>
        <button onClick={() => props.toggleFollow(props.userId)}>
          {props.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default UserAvatar;