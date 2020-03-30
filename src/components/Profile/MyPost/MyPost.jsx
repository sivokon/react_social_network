import React from 'react';
import styles from './MyPost.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';

const MyPost = (props) => {

  let postsElements = props.posts.map(
    post => <Post message={post.message} likesCount={post.likesCount} />
  );
  
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onTextChange = (e) => {
    let postText = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(postText));
  };

  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea onChange={onTextChange} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPost;