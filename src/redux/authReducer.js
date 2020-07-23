import { authApi } from '../api/api';

const SET_CURRENT_USER = "SET_CURRENT_USER";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CURRENT_USER:
      return {
        ...state,
        ...action.currentUserData,
        isAuth: true
      }
  }

  return state;
}

export const getLoggedInUser = () => (dispatch) => {
  authApi.retrieveCurrentLoggedInUserInfo()
    .then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setCurrentUser(id, login, email));
      }
    });
}

export const setCurrentUser = (userId, login, email) =>
  ({ type: SET_CURRENT_USER, currentUserData: { userId, login, email } });