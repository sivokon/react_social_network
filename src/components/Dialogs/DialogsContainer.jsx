import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageText: (messageText) => {
      dispatch(updateNewMessageTextActionCreator(messageText));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;