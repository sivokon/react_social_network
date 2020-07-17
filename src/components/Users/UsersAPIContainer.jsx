import React from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.retrieveUsers(this.props.currentPage, this.props.pageSize, response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  togglePagination = () => {
    let firstPageIndex = 1;

    this.props.togglePagination();
    this.props.setCurrentPage(firstPageIndex);

    this.retrieveUsers(firstPageIndex, this.props.pageSize, response => {
      this.props.setUsers(response.data.items);
    });
  }

  onPageChanged = (pageIndex) => {
    this.props.setCurrentPage(pageIndex);

    this.retrieveUsers(pageIndex, this.props.pageSize, response => {
      this.props.setUsers(response.data.items);
    });
  }

  onShowMoreClick = () => {
    let nextPageIndex = this.props.currentPage + 1;

    this.props.setCurrentPage(nextPageIndex);

    this.retrieveUsers(nextPageIndex, this.props.pageSize, response => {
      this.props.addUsers(response.data.items);
    });
  }

  retrieveUsers = (page, count, successCallback) => {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`, { withCredentials: true })
      .then(response => {
        this.props.toggleIsFetching(false);
        successCallback(response);
      });
  }

  // toggleFollow = (userId) => {
  //   let user = this.props.users.find(e => e.id == userId);
  //   if (user.followed) {
  //     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
  //       { 
  //         withCredentials: true,
  //         headers: {
  //           "API-KEY": "909e8075-ec8d-42ca-b97f-8694f6381a31"
  //         }
  //       })
  //       .then(response => {
  //         if (response.data.resultCode === 0) {
  //           this.props.toggleFollow(userId);
  //         }
  //       })
  //   } else {
  //     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
  //       { 
  //         withCredentials: true,
  //         headers: {
  //           "API-KEY": "909e8075-ec8d-42ca-b97f-8694f6381a31"
  //         }
  //       })
  //       .then(response => {
  //         if (response.data.resultCode === 0) {
  //           this.props.toggleFollow(userId);
  //         }
  //       });
  //   }
  // }

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
          toggleFollow={this.props.toggleFollow}
          togglePagination={this.togglePagination.bind(this)}
          onPageChanged={this.onPageChanged.bind(this)}
          onShowMoreClick={this.onShowMoreClick.bind(this)} />
      </>
    );
  }
}

export default UsersAPIContainer;