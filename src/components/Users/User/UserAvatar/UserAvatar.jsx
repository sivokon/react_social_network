import React from 'react';
import styles from './UserAvatar.module.css';
import userImage from '../../../../assets/images/user.jpg';

const UserAvatar = (props) => {
  return (
    <div className={styles.userAvatar}>
      <img src={props.avatar ? props.avatar : userImage} />
      <div>
        <button onClick={() => props.toggleFollow(props.userId)}>
          {props.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default UserAvatar;