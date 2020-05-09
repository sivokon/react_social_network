import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = (props) => {
  return (
    <div className={styles.userInfo}>
      <p>{props.fullName}</p>
      <p>{props.country}, {props.city}</p>
      <p>{props.status}</p>
    </div>
  );
}

export default UserInfo;