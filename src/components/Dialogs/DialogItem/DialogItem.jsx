import React from 'react';
import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className={styles.dialog}>
      <div className={styles.avatar}>
        <img src="https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" />
      </div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;