import React from 'react';
import styles from  './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
  return (
      <div>
        my posts
        <div>
          new post
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={styles.posts}>
          <Post message="Hello! I am learning React." likesCount="5" />
          <Post message="Look, today is a good day." likesCount="7" />
          <Post message="How about reading some article?" likesCount="10" />
        </div>
      </div>
  );
}

export default MyPost;