import { useEffect, useState } from "react";


const Timer = (props) => {
	
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
		setInterval(() => {
			setSeconds(prev => prev + 1)
		}, 1000);
  }, []);

	useEffect(() => {
		setSeconds(0);
	}, [props.selectedUser]);

  return (
		<div className="wrapper">
			You've been viewing this profile for 
			{seconds >= 60 && ` ${Math.floor(seconds / 60)} minutes`} {seconds % 60} seconds
		</div>
	)
};

export default Timer;