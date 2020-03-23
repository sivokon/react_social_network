import React from 'react';
import styles from  './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost store={props.store}
              posts={props.profileState.posts}
              newPostText={props.profileState.newPostText}/>
    </div>
  );
}

export default Profile;