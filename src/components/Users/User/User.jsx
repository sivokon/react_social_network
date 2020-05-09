import React from 'react';
import styles from './User.module.css';
import UserAvatar from './UserAvatar/UserAvatar';
import UserInfo from './UserInfo/UserInfo';

const User = (props) => {
  return (
    <div className={styles.userBlock}>
      <div className={styles.userBlockGrid}>
        <UserAvatar userId={props.userId} followed={props.followed} avatarUrl={props.avatarUrl} toggleFollow={props.toggleFollow}/>
        <UserInfo fullName={props.fullName} location={props.location} status={props.status}/>
      </div>
    </div>
  );
}

export default User;