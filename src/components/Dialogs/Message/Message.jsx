import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {

  let ownerMessageClass = props.userId == 1 ? styles.message_currentUser : styles.message_anotherUser;

  return (
    <div className={ownerMessageClass}>
      <div className={styles.avatar}>
        <img src="https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" />
      </div>
      <div className={styles.messageText}>
        {props.message}
      </div>
    </div>
  );
}

export default Message;