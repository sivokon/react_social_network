import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {



  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
      </div>
      <div className={styles.friendsBlock}>
        <h3>Friends</h3>
        <div className={styles.friendsList}>
          <div className={styles.friendItem}>
            <div>
              <img src="https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" />
            </div>
            <div className={styles.friendName}>
              Andrew
            </div>
          </div>
          <div className={styles.friendItem}>
            <div>
              <img src="https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" />
            </div>
            <div className={styles.friendName}>
              Dennis
            </div>
          </div>
          <div className={styles.friendItem}>
            <div>
              <img src="https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" />
            </div>
            <div className={styles.friendName}>
              Artem
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;