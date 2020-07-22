import { connect } from 'react-redux';
import UsersAPIContainer from './UsersAPIContainer';
import { toggleFollow, setCurrentPage, togglePagination, setFollowingIsInProgress, getInitialUsers, getAdditionalUsers } from '../../redux/usersReducer';

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
  { toggleFollow, setCurrentPage, togglePagination, setFollowingIsInProgress, getInitialUsers, getAdditionalUsers }
)(UsersAPIContainer);

export default UsersContainer;