import { connect } from 'react-redux';
import UsersAPIContainer from './UsersAPIContainer';
import { toggleFollow, setUsers, setTotalUsersCount, setCurrentPage, togglePagination, addUsers, toggleIsFetching, setFollowingIsInProgress } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    addPagination: state.usersPage.addPagination,
    isFetching: state.usersPage.isFetching,
    followingInProgressUsersIds: state.usersPage.followingInProgressUsersIds
  }
}

const UsersContainer = connect(
  mapStateToProps,
  { toggleFollow, setUsers, addUsers, setTotalUsersCount, setCurrentPage, togglePagination, toggleIsFetching, setFollowingIsInProgress }
)(UsersAPIContainer);

export default UsersContainer;