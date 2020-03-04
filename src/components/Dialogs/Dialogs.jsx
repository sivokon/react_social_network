import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <Dialog name="Nastiia" id="1" />
        <Dialog name="Andrew" id="2" />
        <Dialog name="Dennis" id="3" />
        <Dialog name="Alexei" id="4" />
        <Dialog name="Artem" id="5" />
      </div>
      <div className={styles.messages}>
        <Message message="Hello, how are you?"/>
        <Message message="Let's go to gym."/>
        <Message message="Have you done EO lab?"/>
      </div>
    </div>
  );
}

export default Dialogs;