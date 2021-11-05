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

	return (
		<div className='App'>
			<div>
				<AppContext.Provider value={{ daysOfWeek, checkDay, setCheckDay }}>
					<Header />
					<WeekdayList />
					<Button
						variant='contained'
						onClick={() => {
							alert('saved!');
						}}
					>
						Save
					</Button>
				</AppContext.Provider>
			</div>
		</div>
	);
}

export default App;
