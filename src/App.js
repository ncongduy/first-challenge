import './App.css';
import Header from './components/header/header';
import Button from '@mui/material/Button';
import WeekdayList from './components/weekdayList/weekdayList';
import React, { useState } from 'react';

// use React Context
export const AppContext = React.createContext();

function App() {
	const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
	const [checkDay, setCheckDay] = useState(daysOfWeek);
	const [schedule, setSchedule] = useState({
		mon: ['16:00', '20:00'],
		tue: ['16:00', '20:00'],
		wed: ['16:00', '20:00'],
		thu: ['16:00', '20:00'],
		fri: ['16:00', '20:00'],
		sat: ['16:00', '20:00'],
		sun: ['16:00', '20:00'],
	});

	function handleButtonClick() {
		const submitObject = {};

		Object.entries(schedule).forEach((dayItem) => {
			if (checkDay.includes(dayItem[0])) {
				submitObject[dayItem[0]] = dayItem[1];
			}
		});

		alert(`Send data to server: ${JSON.stringify(submitObject, null, 2)}`);
		console.log(submitObject);
	}

	return (
		<div className='App'>
			<div className='container'>
				<AppContext.Provider
					value={{
						daysOfWeek,
						checkDay,
						setCheckDay,
						schedule,
						setSchedule,
					}}
				>
					<Header />
					<WeekdayList />
					<Button variant='contained' onClick={handleButtonClick}>
						Save
					</Button>
				</AppContext.Provider>
			</div>
		</div>
	);
}

export default App;

// alert('saved!');
