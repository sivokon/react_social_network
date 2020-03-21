import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

export const renderEntireTree = (state, addPost, updateNewPostText, sendMessage, updateNewMessageText) => {
  ReactDOM.render(<App state={state}
                       addPost={addPost}
                       updateNewPostText={updateNewPostText}
                       sendMessage={sendMessage}
                       updateNewMessageText={updateNewMessageText}/>, document.getElementById('root'));
}