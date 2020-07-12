import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import defaultAvatar from '../../../assets/images/user.jpg';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  let socialNetworks = props.profile.contacts;
  let userSocialNetworks = [];
  for (let socialNetworkName in socialNetworks) {
    if (socialNetworks[socialNetworkName]) {
      userSocialNetworks.push(
        <div><a href={socialNetworks[socialNetworkName]}>{socialNetworkName}</a></div>
      );
    }
  }

  return (
    <div className={styles.profileContainer}>
      <div>
        <img src="https://images.unsplash.com/photo-1442033025416-c6a7da752d71?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80" />
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.avatar}>
          <img src={props.profile.photos.large || defaultAvatar} />
        </div>
        <div className={styles.profileInfoHeader}>
          <div className={styles.fullName}>{props.profile.fullName}</div>
          <div>{props.profile.aboutMe}</div>
        </div>
        <div className={styles.jobBlock}>
          <div className={styles.blockTitle}>Job</div>
          <div>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
          {props.profile.lookingForAJobDescription && <div>Description: {props.profile.lookingForAJobDescription}</div>}
        </div>
        {
          userSocialNetworks &&
          <div className={styles.contactsBlock}>
            <div className={styles.blockTitle}>
              Find me in social networks:
            </div>
            {userSocialNetworks}
          </div>
        }
      </div>
    </div>
  );
}

export default ProfileInfo;