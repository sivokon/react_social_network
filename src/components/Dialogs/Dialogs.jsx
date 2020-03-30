import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsState.dialogs.map(
    dialog => <DialogItem name={dialog.name} id={dialog.id} />
  );

  let messagesElements = props.dialogsState.messages.map(
    messageObj => <Message message={messageObj.message} userId={messageObj.userId} />
  );

  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  }

  const onTextChange = (e) => {
    let messageText = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(messageText));
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        { dialogsElements }
      </div>
      <div className={styles.messages}>
        { messagesElements }
        <div>
          <textarea onChange={onTextChange} value={props.dialogsState.newMessageText}></textarea>
        </div>
        <div>
          <button onClick={ sendMessage }>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;