const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hello! I am learning React.", likesCount: 5 },
    { id: 2, message: "Look, today is a good day.", likesCount: 7 },
    { id: 3, message: "How about reading some article?", likesCount: 10 }
  ],
  newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
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