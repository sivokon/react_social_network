import React from 'react';
import styles from './UserAvatar.module.css';
import defaultAvatar from '../../../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const UserAvatar = (props) => {

  const follow = () => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "909e8075-ec8d-42ca-b97f-8694f6381a31"
        }
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          props.toggleFollow(props.userId);
        }
      });
  }

  const unfollow = () => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`,
      {
        withCredentials: true,
        headers: {
          "API-KEY": "909e8075-ec8d-42ca-b97f-8694f6381a31"
        }
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          props.toggleFollow(props.userId);
        }
      });
  }

  return (
    <div className={styles.userAvatar}>
      <NavLink to={`/profile/${props.userId}`}>
        <img src={props.avatar || defaultAvatar} />
      </NavLink>
      <div>
        {
          props.followed
            ? <button onClick={unfollow}>Unfollow</button>
            : <button onClick={follow}>Follow</button>
        }
        {/* <button onClick={() => props.toggleFollow(props.userId)}>
          {props.followed ? "Unfollow" : "Follow"}
        </button> */}
      </div>
    </div>
  );
}

export default UserAvatar;