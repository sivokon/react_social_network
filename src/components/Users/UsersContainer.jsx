import { connect } from 'react-redux';
import UsersAPIContainer from './UsersAPIContainer';
import { setCurrentPage, togglePagination, getInitialUsers, getAdditionalUsers, followUser, unfollowUser } from '../../redux/usersReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

const UsersApiContainerWithAuthRedirect = withAuthRedirect(UsersAPIContainer);

const UsersContainer = connect(
  mapStateToProps,
  { setCurrentPage,
    togglePagination,
    getInitialUsers,
    getAdditionalUsers,
    followUser,
    unfollowUser }
)(UsersApiContainerWithAuthRedirect);

export default UsersContainer;