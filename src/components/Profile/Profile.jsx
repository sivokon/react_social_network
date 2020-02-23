import React from 'react';
import styles from  './Profile.module.css';
import MyPost from './MyPost/MyPost';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://schuttejoe.github.io/img/Posts/DisneyPostMortem/Preview.png" />
      </div>
      <div>
        avatar + description
      </div>
      <MyPost />
    </div>
  );
}

export default Profile;