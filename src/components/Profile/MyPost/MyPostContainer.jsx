import React from 'react';
import MyPost from './MyPost'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';

const MyPostContainer = (props) => {

  let profileState = props.store.getState().profilePage;

  return (
    <MyPost addPost={() => props.store.dispatch(addPostActionCreator())}
            updateNewPostText={(postText) => props.store.dispatch(updateNewPostTextActionCreator(postText))}
            posts={profileState.posts}
            newPostText={profileState.newPostText}/>
  );
}

export default MyPostContainer;