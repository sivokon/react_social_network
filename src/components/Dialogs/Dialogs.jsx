import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {

  let dialogs = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Dennis" },
    { id: 4, name: "Alexei" },
    { id: 5, name: "Artem" }
  ];

  let messages = [
    { id: 1, message: "Hello, how are you?" },
    { id: 2, message: "Let's go to gym." },
    { id: 3, message: "Have you done EO lab?" }
  ];

  let dialogsElements = dialogs.map(
    dialog => <DialogItem name={dialog.name} id={dialog.id} />
  );

  let messagesElements = messages.map(
    messageObj => <Message message={messageObj.message} />
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