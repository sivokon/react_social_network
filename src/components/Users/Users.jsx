import React from 'react';
import User from './User/User';
import styles from './Users.module.css';

const Users = (props) => {

  if (!props.users.length) {
    props.setUsers([
      { id: 1, followed: false, fullName: "Artem Tarasenko", location: { country: "Ukraine", city: "Kiev" }, status: "I am React developer", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
      { id: 2, followed: false, fullName: "Sanan Sivasankaran", location: { country: "India", city: "New Deli" }, status: "I am Indian man", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
      { id: 3, followed: true, fullName: "Andrew Markus", location: { country: "Ukraine", city: "Kiev" }, status: "I am looking for new interesting projects...", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" },
      { id: 4, followed: true, fullName: "Andrew Mokii", location: { country: "Ukraine", city: "Dnipro" }, status: "Hey, what about Ansible and servers administration?", avatarUrl: "https://yt3.ggpht.com/a/AGF-l7-uueDdRmZsJQOVmDZCeIjv8tU9swZd1pJYCw=s900-c-k-c0xffffffff-no-rj-mo" }
    ]);
    return (<div></div>);
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