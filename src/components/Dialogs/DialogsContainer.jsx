import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {

  let state = props.store.getState();
  
  return (
    <Dialogs sendMessage={() => props.store.dispatch(sendMessageActionCreator())}
             updateNewMessageText={(messageText) => props.store.dispatch(updateNewMessageTextActionCreator(messageText))}
             dialogsPage={state.dialogsPage} />
  );
}

export default DialogsContainer;