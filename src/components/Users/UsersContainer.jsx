import { connect } from 'react-redux';
import UsersAPIContainer from './UsersAPIContainer';
import { toggleFollowAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC, togglePaginationAC, addUsersAC, toggleIsFetchingAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    addPagination: state.usersPage.addPagination,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    addUsers: (users) => dispatch(addUsersAC(users)),
    setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    togglePagination: () => dispatch(togglePaginationAC()),
    toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;