import MyPost from './MyPosts'
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostText })(MyPost);

export default MyPostsContainer;