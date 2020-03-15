import React from 'react';
import styles from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
    <div className={styles.friendItem}>
      <div>
        <img src={props.avatarUrl} />
      </div>
      <div>
        {props.name}
      </div>
    </div>
  );
}

export default FriendItem;