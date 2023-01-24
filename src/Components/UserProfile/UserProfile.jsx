import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./UserProfile.module.scss";

import followsIcon from '../../assets/images/UserProfile/follows.png';
import separatorIcon from '../../assets/images/UserProfile/separator.png';
import locationIcon from '../../assets/images/UserProfile/location.png';

import Timer from "./Timer/Timer";
import Loader from "../../common/Loader/Loader";


const UserProfile = (props) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (props.selectedUser) {
      axios
        .get(`https://api.github.com/users/${props.selectedUser.login}`)
        .then((response) => setUserDetails(response.data));
    }
  }, [props.selectedUser]);

  return (
    <div className={styles.wrapper}>
      {userDetails ? (
        <div className={styles.profile}>
					<div className={styles.head}>
						<div className="">
							<img src={userDetails.avatar_url} className={styles.avatar} alt="avatar" />
						</div>
						<div className={styles.info}>
							<div className={styles.mainInfo}>
								<div className={styles.name}>{userDetails.name ? userDetails.name : 'username'}</div>
								<div className="toGitHub">
									<a 
										className={styles.toGithub}  
										href={userDetails.html_url} 
										target="_blank" 
										rel="noreferrer"
									>to GitHub
									</a>
								</div>
							</div>
							<div className={styles.login}>{userDetails.login}</div>
						</div>
					</div>
					<div className={styles.body}>
						<div className={styles.bio}>{userDetails.bio}</div>

						<div className={styles.followsWrapper}>
							<img className={styles.followsImg} src={followsIcon} alt="Follows" />
							<span className={styles.follows}>
								<span className={styles.followsNumber}>{userDetails.followers}
								</span> followers
							</span>
							<img className={styles.separatorImg} src={separatorIcon} alt="Separator" />
							<span className={styles.follows}>
								<span className={styles.followsNumber}>{userDetails.following}
								</span> following
							</span>
						</div>

						<div className={styles.locationWrapper}>
							{userDetails.location && <img className={styles.locationImg} src={locationIcon} alt="Location" />}
							{userDetails.location}
						</div>
					</div>
				</div>
      ) : <Loader />}
			<div className={styles.timer}>
        <Timer
          selectedUser={props.selectedUser}
          setSelectedUser={props.setSelectedUser}
        />
      </div>
    </div>
  );
};

export default UserProfile;
