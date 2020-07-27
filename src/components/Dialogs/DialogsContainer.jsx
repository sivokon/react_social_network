import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};


// let DialogsWithAuthRedirect = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessageText })(DialogsWithAuthRedirect);

// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, { sendMessage, updateNewMessageText }),
  withAuthRedirect
)(Dialogs);