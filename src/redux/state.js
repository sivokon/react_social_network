let state = {
  profilePage: {
    posts: [
      { id:1, message: "Hello! I am learning React.", likesCount: 5 },
      { id:2, message: "Look, today is a good day.", likesCount: 7 },
      { id:3, message: "How about reading some article?", likesCount: 10 }
    ]
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
      { id: 1, message: "Hello, how are you?", userId: 1 },
      { id: 2, message: "Let's go to gym.", userId: 2 },
      { id: 3, message: "Have you done EO lab?", userId: 1 }
    ]
  },
  navbar: {
    friends: [
      { id: 1, name: "Andrew", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
      { id: 2, name: "Dennis", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
      { id: 3, name: "Artem", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" }
    ]
  }
};

export default state;