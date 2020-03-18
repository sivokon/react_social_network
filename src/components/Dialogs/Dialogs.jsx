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

  let textareaElementRef = React.createRef();

  let sendMessage = () => {
    let newMessage = textareaElementRef.current.value;
    alert(newMessage);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        { dialogsElements }
      </div>
      <div className={styles.messages}>
        { messagesElements }
        <div>
          <textarea ref={textareaElementRef}></textarea>
        </div>
        <div>
          <button onClick={ sendMessage }>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;