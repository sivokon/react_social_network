import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsState.dialogs.map(
    dialog => <DialogItem name={dialog.name} id={dialog.id} />
  );

  let messagesElements = props.dialogsState.messages.map(
    messageObj => <Message message={messageObj.message} userId={messageObj.userId} />
  );

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        { dialogsElements }
      </div>
      <div className={styles.messages}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;