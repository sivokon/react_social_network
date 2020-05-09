import React from 'react';
import styles from './UserAvatar.module.css';

const UserAvatar = (props) => {
  return (
    <div className={styles.userAvatar}>
      <img src={props.avatarUrl} />
      <div>
        {
          props.followed
            ? <button>Follow</button>
            : <button>Unfollow</button>
        }
      </div>
    </div>
  );
}

export default UserAvatar;