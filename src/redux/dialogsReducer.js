const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state, action) => {
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