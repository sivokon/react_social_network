import React from 'react';
import styles from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {

  let posts = [
    { id:1, message: "Hello! I am learning React.", likesCount: 5 },
    { id:2, message: "Look, today is a good day.", likesCount: 7 },
    { id:3, message: "How about reading some article?", likesCount: 10 }
  ];

  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message={posts[0].message} likesCount={posts[0].likesCount} />
        <Post message={posts[1].message} likesCount={posts[1].likesCount} />
        <Post message={posts[2].message} likesCount={posts[2].likesCount} />
      </div>
    </div>
  );
}

export default MyPost;