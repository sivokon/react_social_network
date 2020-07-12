import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(
    dialog => <DialogItem name={dialog.name} id={dialog.id} />
  );
  let messagesElements = props.dialogsPage.messages.map(
    messageObj => <Message message={messageObj.message} userId={messageObj.userId} />
  );

  const onSendMessageClick = () => {
    props.sendMessage();
  }

  const onNewMessageChange = (e) => {
    let messageText = e.target.value;
    props.updateNewMessageText(messageText);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <div>
          <textarea onChange={onNewMessageChange}
            value={props.dialogsPage.newMessageText}
            placeholder="Enter your message..."></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;