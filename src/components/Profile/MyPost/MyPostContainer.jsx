import MyPost from './MyPost'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (postText) => {
      dispatch(updateNewPostTextActionCreator(postText));
    }
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;