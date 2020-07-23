import React from 'react';
import Users from './Users';
import { usersApi } from '../../api/api';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getInitialUsers(this.props.currentPage, this.props.pageSize);
  }

  togglePagination = () => {
    let firstPageIndex = 1;

    this.props.togglePagination();
    this.props.setCurrentPage(firstPageIndex);

    this.props.getInitialUsers(firstPageIndex, this.props.pageSize);
  }

  onPageChanged = (pageIndex) => {
    this.props.setCurrentPage(pageIndex);

    this.props.getInitialUsers(pageIndex, this.props.pageSize);
  }

  onShowMoreClick = () => {
    let nextPageIndex = this.props.currentPage + 1;

    this.props.setCurrentPage(nextPageIndex);

    this.props.getAdditionalUsers(nextPageIndex, this.props.pageSize);
  }

  render() {
    return (
      <>
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          addPagination={this.props.addPagination}
          isFetching={this.props.isFetching}
          followingInProgressUsersIds={this.props.followingInProgressUsersIds}
          togglePagination={this.togglePagination.bind(this)}
          onPageChanged={this.onPageChanged.bind(this)}
          onShowMoreClick={this.onShowMoreClick.bind(this)}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser} />
      </>
    );
  }
}

export default UsersAPIContainer;