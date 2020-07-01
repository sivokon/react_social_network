import React from 'react';
import User from './User/User';
import styles from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {

  if (!props.users.length) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then( response => props.setUsers(response.data.items) );
  }
  
  let users = props.users.map(
    user => <User user={user} toggleFollow={props.toggleFollow}/>);

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