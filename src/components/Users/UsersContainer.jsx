import { connect } from 'react-redux';
import Users from './Users';
import { toggleFollowAC, setUsersAC, setTotalUsersCountAC, setCurrentPageAC, togglePaginationAC, addUsersAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    addPagination: state.usersPage.addPagination
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    addUsers: (users) => dispatch(addUsersAC(users)),
    setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    togglePagination: () => dispatch(togglePaginationAC())
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;