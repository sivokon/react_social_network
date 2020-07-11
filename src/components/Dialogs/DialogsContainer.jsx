import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessageText })(Dialogs);

export default DialogsContainer;