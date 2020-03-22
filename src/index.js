import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPost, updateNewPostText, sendMessage, updateNewMessageText, subscribe} from './redux/state';

const renderEntireTree = (state) => {
  ReactDOM.render(<App state={state}
                       addPost={addPost}
                       updateNewPostText={updateNewPostText}
                       sendMessage={sendMessage}
                       updateNewMessageText={updateNewMessageText}/>, document.getElementById('root'));
};

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
