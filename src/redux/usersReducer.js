const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_PAGINATION = "ADD_PAGINATION";
const ADD_USERS = "ADD_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 4,
  currentPage: 1,
  addPagination: false,
  isFetching: false
  // users: [
  //   { id: 1, followed: false, fullName: "Artem Tarasenko", location: { country: "Ukraine", city: "Kiev" }, status: "I am React developer", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
  //   { id: 2, followed: false, fullName: "Sanan Sivasankaran", location: { country: "India", city: "New Deli" }, status: "I am Indian man", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
  //   { id: 3, followed: true, fullName: "Andrew Markus", location: { country: "Ukraine", city: "Kiev" }, status: "I am looking for new interesting projects...", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
  //   { id: 4, followed: true, fullName: "Andrew Mokii", location: { country: "Ukraine", city: "Dnipro" }, status: "Hey, what about Ansible and servers administration?", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" }
  // ]
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

  }
  return state;
}

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const addUsersAC = (users) => ({type: ADD_USERS, users});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const togglePaginationAC = () => ({ type: TOGGLE_PAGINATION });
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});