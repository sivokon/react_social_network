import React from 'react';
import styles from  './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

  let posts = [
    { id:1, message: "Hello! I am learning React.", likesCount: 5 },
    { id:2, message: "Look, today is a good day.", likesCount: 7 },
    { id:3, message: "How about reading some article?", likesCount: 10 }
  ];

  return (
    <div>
      <ProfileInfo />
      <MyPost posts={posts} />
    </div>
  );
}

export default Profile;