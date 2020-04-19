import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { navbarReducer } from "./navbarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello! I am learning React.", likesCount: 5 },
        { id: 2, message: "Look, today is a good day.", likesCount: 7 },
        { id: 3, message: "How about reading some article?", likesCount: 10 }
      ],
      newPostText: ""
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Dennis" },
        { id: 4, name: "Alexei" },
        { id: 5, name: "Artem" }
      ],
      messages: [
        { id: 1, message: "Hello, how are you?", userId: 2 },
        { id: 2, message: "Let's go to gym.", userId: 2 },
        { id: 3, message: "Have you done EO lab?", userId: 1 }
      ],
      newMessageText: ""
    },
    navbar: {
      friends: [
        { id: 1, name: "Andrew", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
        { id: 2, name: "Dennis", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
        { id: 3, name: "Artem", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" }
      ]
    }
  },
  _subscriber() {
    console.log('There is no subscribers for now');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);
    this._subscriber(this._state);
  }
}

export default store;

window.store = store;