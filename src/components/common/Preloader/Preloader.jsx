import React from 'react';
import preloader from '../../../assets/images/preloader.gif';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.preloaderBlock}>
      <img src={preloader} />
    </div>
  );
}

export default Preloader;