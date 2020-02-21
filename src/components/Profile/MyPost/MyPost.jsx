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
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
  );
}

export default MyPost;