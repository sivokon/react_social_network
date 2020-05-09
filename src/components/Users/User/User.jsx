import React from 'react';
import styles from './User.module.css';
import UserAvatar from './UserAvatar/UserAvatar';
import UserInfo from './UserInfo/UserInfo';

const User = (props) => {
  return (
    <div className={styles.userBlock}>
      <div className={styles.userBlockGrid}>
        <UserAvatar avatarUrl={props.avatarUrl}/>
        <UserInfo fullName={props.fullName} country={props.country} city={props.city} status={props.status}/>
      </div>
    </div>
  );
}

export default User;