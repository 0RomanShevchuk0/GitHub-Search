import styles from './Greeting.module.scss';
import duckGif from '../../assets/duck.gif';


const Greeting = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.message}>Here you can find a github user by username</h1>
			<img src={duckGif} alt="Duck" />
		</div>
	);
}


export default Greeting;