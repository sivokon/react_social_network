const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state, action) => {
  switch (action.type) {

    case ADD_POST:
      addPost(state);
      return state;

    case UPDATE_NEW_POST_TEXT:
      updateNewPostText(state, action.postText);
      return state;

    default:
      return state;
  }
}

export const addPostActionCreator = () =>
  ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (postText) =>
  ({ type: UPDATE_NEW_POST_TEXT, postText: postText });


function addPost(state) {
  let newPost = {
    id: 4,
    message: state.newPostText,
    likesCount: 0
  };
  state.posts.push(newPost);
  state.newPostText = "";
}

function updateNewPostText(state, postText) {
  state.newPostText = postText;
}