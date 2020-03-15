import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <div>
        <img src="https://images.unsplash.com/photo-1442033025416-c6a7da752d71?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80" />
      </div>
      <div className={styles.descriptionBlock}>
        avatar + description
      </div>
    </div>
  );
}

export default ProfileInfo;