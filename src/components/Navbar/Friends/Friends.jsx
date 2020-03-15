import React from 'react';
import styles from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {

  let friendsElements = props.friends.map(
    friend => <FriendItem name={friend.name} avatarUrl={friend.avatarUrl} />
  )

  return (
    <div className={styles.friendsBlock}>
      <h3>Friends</h3>
      <div className={styles.friendsList}>
        {friendsElements}
      </div>
    </div>
  );
}

export default Friends;