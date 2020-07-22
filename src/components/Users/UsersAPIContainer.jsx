import React from 'react';
import Users from './Users';
import { usersApi } from '../../api/api';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.retrieveUsers(this.props.currentPage, this.props.pageSize, data => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  togglePagination = () => {
    let firstPageIndex = 1;

    this.props.togglePagination();
    this.props.setCurrentPage(firstPageIndex);

    this.retrieveUsers(firstPageIndex, this.props.pageSize, data => {
      this.props.setUsers(data.items);
    });
  }

  onPageChanged = (pageIndex) => {
    this.props.setCurrentPage(pageIndex);

    this.retrieveUsers(pageIndex, this.props.pageSize, data => {
      this.props.setUsers(data.items);
    });
  }

  onShowMoreClick = () => {
    let nextPageIndex = this.props.currentPage + 1;

    this.props.setCurrentPage(nextPageIndex);

    this.retrieveUsers(nextPageIndex, this.props.pageSize, data => {
      this.props.addUsers(data.items);
    });
  }

  retrieveUsers = (page, count, successCallback) => {
    this.props.toggleIsFetching(true);
    usersApi.retrieveUsers(page, count)
      .then(response => {
        this.props.toggleIsFetching(false);
        successCallback(response);
      });
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
          setFollowingIsInProgress={this.props.setFollowingIsInProgress}
          toggleFollow={this.props.toggleFollow}
          togglePagination={this.togglePagination.bind(this)}
          onPageChanged={this.onPageChanged.bind(this)}
          onShowMoreClick={this.onShowMoreClick.bind(this)} />
      </>
    );
  }
}

export default UsersAPIContainer;