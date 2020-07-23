import React from 'react';
import User from './User/User';
import styles from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';

const Users = (props) => {
  
  let users = props.users.map(
    user => <User 
              user={user}
              followUser={props.followUser}
              unfollowUser={props.unfollowUser}
              followingInProgressUsersIds={props.followingInProgressUsersIds} />);

  let paginationCheckbox = props.addPagination
    ? <input type="checkbox" id="pagination" onChange={props.togglePagination} checked disabled={props.isFetching} />
    : <input type="checkbox" id="pagination" onChange={props.togglePagination} disabled={props.isFetching} />;

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let paginationPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    paginationPages.push(
      <div className={`${styles.paginationItem} ${i === props.currentPage && styles.activePaginationItem}`}
        onClick={() => props.onPageChanged(i)}>{i}</div>);
  }

  return (
    <div class={styles.usersPage}>
      <div>
        {
          props.addPagination &&
          <div className={styles.paginationBlock}>
            {props.isFetching ? <Preloader /> : paginationPages}
          </div>
        }
        <div>
          {users}
        </div>
        {
          !props.addPagination &&
          <div className={styles.loadBtn}>
            {
              props.isFetching
                ? <Preloader />
                : <button onClick={props.onShowMoreClick}>Show More</button>
            }
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

export default Users;