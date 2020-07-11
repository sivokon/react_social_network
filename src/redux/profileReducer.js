const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

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
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.postText
      };

    default:
      return state;
  }
}

export const addPost = () =>
  ({ type: ADD_POST });
export const updateNewPostText = (postText) =>
  ({ type: UPDATE_NEW_POST_TEXT, postText: postText });