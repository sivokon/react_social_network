import React from 'react';
import styles from  './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://schuttejoe.github.io/img/Posts/DisneyPostMortem/Preview.png" />
      </div>
      <div>
        avatar + description
      </div>
      <div>
        my posts
        <div>
          new post
        </div>
        <div className={styles.posts}>
          <div className={styles.item}>
            post 1
          </div>
          <div className={styles.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;