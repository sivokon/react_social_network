import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

export const renderEntireTree = (state, addPost, updateNewPostText) => {
  ReactDOM.render(<App state={state}
                       addPost={addPost}
                       updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
}