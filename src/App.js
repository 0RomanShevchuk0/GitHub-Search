import { useState, useEffect } from 'react';

import styles from './App.module.scss';

import Search from './Components/Search/Search';
import UserProfile from './Components/UserProfile/UserProfile';
import UsersList from './Components/UsersList/UserList';


const App = () => {

	const [selectedUser, setSelectedUser] = useState(null);
	const [finalSearch, setFinalSearch] = useState('user');

	useEffect(() => {
		if(selectedUser) {
			document.title = selectedUser.login;
		}
	}, [selectedUser]);


  return (
    <div className={styles.app}>
			<div className={styles.wrapper}>
				<div className={styles.sidebar}>
					<Search 
						setFinalSearch={setFinalSearch} 
						value={finalSearch} 
						/>
					<UsersList 
						selectedUser={selectedUser} 
						setSelectedUser={setSelectedUser} 
						finalSearch={finalSearch}
						/>
				</div>
				<div className={styles.userProfile}>
					{selectedUser && <UserProfile selectedUser={selectedUser} setSelectedUser={setSelectedUser} />}
				</div>
			</div>
    </div>
  );
}

export default App;
