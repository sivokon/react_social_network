let store = {
  _state: {
    profilePage: {
      posts: [
        { id:1, message: "Hello! I am learning React.", likesCount: 5 },
        { id:2, message: "Look, today is a good day.", likesCount: 7 },
        { id:3, message: "How about reading some article?", likesCount: 10 }
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

  addPost() {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._subscriber(this._state);
  },
  updateNewPostText(postText) {
    this._state.profilePage.newPostText = postText;
    this._subscriber(this._state);
  },

  sendMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText,
      userId: 1
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._subscriber(this._state);
  },
  updateNewMessageText(messageText) {
    debugger;
    this._state.dialogsPage.newMessageText = messageText;
    this._subscriber(this._state);
  }
}

export default store;

window.store = store;