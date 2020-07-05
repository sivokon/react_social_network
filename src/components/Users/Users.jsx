import React from 'react';
import User from './User/User';
import styles from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
      .then(response => successCallback(response));
  }

  render() {
    let users = this.props.users.map(
      user => <User user={user} toggleFollow={this.props.toggleFollow} />);

    let paginationCheckbox = this.props.addPagination
      ? <input type="checkbox" id="pagination" onChange={this.togglePagination} checked />
      : <input type="checkbox" id="pagination" onChange={this.togglePagination} />;

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let paginationPages = [];
    for (let i = 1; i <= pagesCount; i++) {
      paginationPages.push(
        <div className={[styles.paginationItem, i === this.props.currentPage && styles.activePaginationItem].join(' ')}
          onClick={() => this.onPageChanged(i)}>{i}</div>);
    }

    return (
      <div class={styles.usersPage}>
        <div>
          {
            this.props.addPagination &&
            <div className={styles.paginationBlock}>
              {paginationPages}
            </div>
          }
          <div>
            {users}
          </div>
          {
            !this.props.addPagination &&
            <div className={styles.loadBtn}>
              <button onClick={this.onShowMoreClick}>Show More</button>
            </div>
          }
        </div>
        <div>
          {paginationCheckbox}
          <label for="pagination">Show pages</label>
        </div>
      </div>
    );
  }
}

export default Users;