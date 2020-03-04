import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <div className={styles.dialog + " " + styles.active}>Nastiia</div>
        <div className={styles.dialog}>Andrew</div>
        <div className={styles.dialog}>Dennis</div>
        <div className={styles.dialog}>Alexei</div>
        <div className={styles.dialog}>Artem</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hello, how are you?</div>
        <div className={styles.message}>Let's go to gym.</div>
        <div className={styles.message}>Have you done EO lab?</div>
      </div>
    </div>
  );
}

export default Dialogs;