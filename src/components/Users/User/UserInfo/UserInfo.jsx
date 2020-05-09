import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = (props) => {
  return (
    <div className={styles.userInfo}>
      <span>{props.fullName}</span><br />
      <span>{props.location.country}, {props.location.city}</span><br />
      <span>{props.status}</span>
    </div>
  );
}

export default UserInfo;