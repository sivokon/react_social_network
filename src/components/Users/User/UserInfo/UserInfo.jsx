import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = (props) => {
  return (
    <div className={styles.userInfo}>
      <span>{props.name}</span><br />
      <span>{"<country>"}, {"<city>"}</span><br />
      <span>{props.status ? props.status : "<no status for this user>"}</span>
    </div>
  );
}

export default UserInfo;