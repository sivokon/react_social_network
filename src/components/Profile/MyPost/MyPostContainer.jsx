import React from 'react';
import MyPost from './MyPost'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../redux/StoreContext';

const MyPostContainer = (props) => {

  //let profileState = props.store.getState().profilePage;

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          return (
            <MyPost addPost={() => store.dispatch(addPostActionCreator())}
                  updateNewPostText={(postText) => store.dispatch(updateNewPostTextActionCreator(postText))}
                  posts={store.getState().profilePage.posts}
                  newPostText={store.getState().profilePage.newPostText} />
          );
        }
      }
    </StoreContext.Consumer>
  );
}

export default MyPostContainer;