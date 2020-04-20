import React from 'react';
import styles from './MyPost.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';

const MyPost = (props) => {

  let postsElements = props.posts.map(
    post => <Post message={post.message} likesCount={post.likesCount} />
  );
  
  const onAddPostClick = () => {
    props.addPost();
  };

  const onPostTextChange = (e) => {
    let postText = e.target.value;
    props.updateNewPostText(postText);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea onChange={onPostTextChange} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={ onAddPostClick }>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPost;