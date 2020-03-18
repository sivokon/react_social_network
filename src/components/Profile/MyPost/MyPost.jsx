import React from 'react';
import styles from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {

  let postsElements = props.posts.map(
    post => <Post message={post.message} likesCount={post.likesCount} />
  );

  let textareaElementRef = React.createRef();
  
  let addPost = () => {
    let postContent = textareaElementRef.current.value;
    alert(postContent);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea ref={textareaElementRef}></textarea>
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