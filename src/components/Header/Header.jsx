import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://www.pinclipart.com/picdir/big/211-2116571_website-website-logo-png-transparent-background-clipart.png" />
      <div className={styles.headerLogin}>
        {props.isAuth ? `Hello, ${props.login}` : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;