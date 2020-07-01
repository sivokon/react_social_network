import React from 'react';
import styles from './User.module.css';
import UserAvatar from './UserAvatar/UserAvatar';
import UserInfo from './UserInfo/UserInfo';

const User = (props) => {
  return (
    <div className={styles.userBlock}>
      <div className={styles.userBlockGrid}>
        <UserAvatar
            userId={props.user.id}
            followed={props.user.followed}
            avatar={props.user.photos.small}
            toggleFollow={props.toggleFollow}/>
        <UserInfo
            name={props.user.name}
            // location={props.user.location}
            status={props.user.status}/>
      </div>
    </div>
  );
}

export default User;