import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <div className={styles.dialog + " " + styles.active}>
          <NavLink to="/dialogs/1">Nastiia</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/2">Andrew</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/3">Dennis</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/4">Alexei</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/5">Artem</NavLink>
        </div>
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