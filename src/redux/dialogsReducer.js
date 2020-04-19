const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      sendMessage(state);
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      updateNewMessageText(state, action.messageText);
      return state;

    default:
      return state;
  }
}

export const sendMessageActionCreator = () =>
  ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (messageText) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: messageText })

function sendMessage(state) {
  let newMessage = {
    id: 4,
    message: state.newMessageText,
    userId: 1
  };
  state.messages.push(newMessage);
  state.newMessageText = "";
}

function updateNewMessageText(state, messageText) {
  state.newMessageText = messageText;
}