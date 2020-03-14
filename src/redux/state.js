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
      { id: 1, message: "Hello, how are you?" },
      { id: 2, message: "Let's go to gym." },
      { id: 3, message: "Have you done EO lab?" }
    ]
  }
};

export default state;