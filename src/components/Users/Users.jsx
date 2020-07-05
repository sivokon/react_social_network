import React from 'react';
import User from './User/User';
import styles from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then( response => this.props.setUsers(response.data.items) );
  }

  render() {
    let users = this.props.users.map(
      user => <User user={user} toggleFollow={this.props.toggleFollow}/>);

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
}

export default Users;