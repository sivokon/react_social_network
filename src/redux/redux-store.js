import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { navbarReducer } from "./navbarReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

export default store;

window.store = store;