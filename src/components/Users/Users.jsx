import React from 'react';
import User from './User/User';
import styles from './Users.module.css';

const Users = (props) => {

  let users = props.users.map(
    user => <User
              fullName={user.fullName}
              country={user.country}
              city={user.city}
              status={user.status}
              avatarUrl={user.avatarUrl}/>)

  return (
    <div class={styles.usersPage}>
      <div>
        <div>
          {users}
        </div>
        <div className={styles.loadBtn}>
          <button>Show More</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Users;