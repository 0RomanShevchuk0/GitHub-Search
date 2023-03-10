import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from  './UsersList.module.scss';

import Loader from '../../common/Loader/Loader';


const UsersList = (props) => {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		axios.get(`https://api.github.com/search/users?q=${props.finalSearch}`)
		.then((response) => setUsers(response.data.items));
	}, [props.finalSearch]);


	if(!users) {
		return (
			<div className={styles.wrapper}>
				<Loader />
			</div>
		);
	}

	let usersElements = users.map(user => 
		<li 
			key={user.id}
			className={ user === props.selectedUser ? [styles.user, styles.selected].join(' ') : styles.user}
			onClick={() => {
				props.setSelectedUser(user);
			}}
		>{user.login}</li>);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.usersList}>{usersElements}</ul>
    </div>
  );
};


export default UsersList;