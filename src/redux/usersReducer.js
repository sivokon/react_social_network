import Axios from "axios";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_PAGINATION = "TOGGLE_PAGINATION";
const ADD_USERS = "ADD_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_FOLLOWING_IS_IN_PROGRESS = "SET_FOLLOWING_IS_IN_PROGRESS";

let initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 4,
  currentPage: 1,
  addPagination: false,
  isFetching: false,
  followingInProgressUsersIds: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(e => {
          if (e.id === action.userId) {
            return { ...e, followed: !e.followed }
          }
          return e;
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount < 50 ? action.totalCount : 50 
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case TOGGLE_PAGINATION:
      return {
        ...state,
        addPagination: !state.addPagination
      }
    
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case SET_FOLLOWING_IS_IN_PROGRESS:
      return {
        ...state,
        followingInProgressUsersIds: action.isInProgress
          ? [...state.followingInProgressUsersIds, action.userId]
          : [state.followingInProgressUsersIds.filter(e => e != action.userId)]
      }

  }
  return state;
}

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const addUsers = (users) => ({type: ADD_USERS, users});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const togglePagination = () => ({ type: TOGGLE_PAGINATION });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setFollowingIsInProgress = (isInProgress, userId) => ({type: SET_FOLLOWING_IS_IN_PROGRESS, isInProgress, userId});