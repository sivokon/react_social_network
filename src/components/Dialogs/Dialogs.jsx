import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {

  let users = [
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

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <Dialog name={users[0].name} id={users[0].id} />
        <Dialog name={users[1].name} id={users[1].id} />
        <Dialog name={users[2].name} id={users[2].id} />
        <Dialog name={users[3].name} id={users[3].id} />
        <Dialog name={users[4].name} id={users[4].id} />
      </div>
      <div className={styles.messages}>
        <Message message={messages[0].message}/>
        <Message message={messages[1].message}/>
        <Message message={messages[2].message}/>
      </div>
    </div>
  );
}

export default Dialogs;