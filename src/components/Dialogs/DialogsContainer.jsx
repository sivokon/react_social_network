import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};


let DialogsWithAuthRedirect = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessageText })(DialogsWithAuthRedirect);

export default DialogsContainer;