import React from 'react';
import styles from  './MyPost.module.css';

const MyPost = () => {
  return (
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
  );
}

export default MyPost;