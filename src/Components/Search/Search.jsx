import { useState, useEffect } from "react";

import styles from './Search.module.scss';
import searchImg from '../../assets/images/Search/white-search.png';
import resetImg from '../../assets/images/Search/white-reset.png';


const Search = (props) => {
	
	const [tempSearch, setTempSearch] = useState('');

	useEffect(() => {
		setTempSearch(props.value)
	}, [props.value]);

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search"
				className={styles.searchInput}
        value={tempSearch}
        onChange={(e) => setTempSearch(e.currentTarget.value)}
      />

			<button 
				className={styles.button}
				onClick={() => props.setFinalSearch(tempSearch)}
			>
				<img src={searchImg}alt="search"/>
			</button>

			<button 
				className={styles.button} 
				onClick={() => props.setFinalSearch('user')}
			>
				<img src={resetImg}alt="reset"/>
			</button>
			
    </div>
  );
};


export default Search;