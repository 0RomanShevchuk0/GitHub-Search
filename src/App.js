import { useState, useEffect } from 'react';

import styles from './App.module.scss';
import burger from './assets/images/Burger/open.png';

import Search from './Components/Search/Search';
import UserProfile from './Components/UserProfile/UserProfile';
import UsersList from './Components/UsersList/UserList';
import Greeting from './Components/Greeting/Greeting';


const App = () => {

	const [selectedUser, setSelectedUser] = useState(null);
	const [finalSearch, setFinalSearch] = useState('user');
	const [isBurgerHidden, setIsBurgerHidden] = useState(false);

	useEffect(() => {
		if(selectedUser) {
			document.title = selectedUser.login;
		}
	}, [selectedUser]);

	useEffect(() => {
		if(window.innerWidth < 768) {
			setIsBurgerHidden(true);
		}
	}, [selectedUser]);

	useEffect(() => {
		const burger = document.querySelector('#burger');
		const wrapper = document.querySelector('#wrapper');
		const sidebar = document.querySelector('#sidebar');

		if(isBurgerHidden === true) {
			burger.classList.add(styles.hidden);
			wrapper.classList.add(styles.hidden);
			sidebar.classList.add(styles.hidden);
		}
		else {
			burger.classList.remove(styles.hidden);
			wrapper.classList.remove(styles.hidden);
			sidebar.classList.remove(styles.hidden);
		}
		console.log(`isBurgerHidden ${isBurgerHidden}`);
		
	},[isBurgerHidden])

	useEffect(() => {
		let windowWidth = window.innerWidth;
		const onResize = () => {
			if(window.innerWidth !== windowWidth) {
				if(window.innerWidth < 768) {
					console.log('less than 768');
					setIsBurgerHidden(true);
				}
				else {
					console.log('more than 768');
					setIsBurgerHidden(false);
				}
			} 
		}
			window.addEventListener('resize', onResize);
			return () => {
				window.removeEventListener('resize', onResize)
		};
	})


  return (
    <div className={styles.app}>
			<div className={styles.wrapper} id="wrapper">
					<button 
						className={styles.burger}
						id="burger"
						onClick={() => isBurgerHidden ? setIsBurgerHidden(false) : setIsBurgerHidden(true)}
					><img src={burger} className={styles.burgerImg} alt="Burger" />
					</button>
				<div className={styles.sidebar} id="sidebar">
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
					{selectedUser ? <UserProfile selectedUser={selectedUser} setSelectedUser={setSelectedUser} /> : <Greeting />}
				</div>
			</div>
    </div>
  );
}

export default App;
